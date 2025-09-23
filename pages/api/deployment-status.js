export default async function handler(req, res) {
  try {
    const VERCEL_TOKEN = process.env.VERCEL_TOKEN;
    const PROJECT_ID = process.env.VERCEL_PROJECT_ID;

    if (!VERCEL_TOKEN || !PROJECT_ID) {
      console.error('Missing environment variables');
      return res.status(500).json({
        build: 'unknown',
        deploy: 'unknown',
        tests: 'unknown',
        error: 'Configuration missing'
      });
    }

    // First, try to get project details to validate credentials
    const projectResponse = await fetch(`https://api.vercel.com/v9/projects/${PROJECT_ID}`, {
      headers: {
        'Authorization': `Bearer ${VERCEL_TOKEN}`,
        'Content-Type': 'application/json',
      },
    });

    if (!projectResponse.ok) {
      console.error('Project validation failed:', await projectResponse.text());
      throw new Error('Failed to validate project access');
    }

    // Log the request details (sanitized)
    console.log('Making request to Vercel API with:', {
      projectId: PROJECT_ID,
      tokenLength: VERCEL_TOKEN.length,
      endpoint: 'https://api.vercel.com/v6/deployments'
    });

    const response = await fetch(`https://api.vercel.com/v6/deployments?projectId=${PROJECT_ID}&limit=1&teamId=${process.env.VERCEL_TEAM_ID || ''}`, {
      headers: {
        'Authorization': `Bearer ${VERCEL_TOKEN}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Vercel API error:', {
        status: response.status,
        statusText: response.statusText,
        error: errorText,
        headers: Object.fromEntries(response.headers.entries())
      });
      
      // Provide more specific error messages
      if (response.status === 401) {
        throw new Error('Invalid Vercel token. Please check your VERCEL_TOKEN.');
      } else if (response.status === 404) {
        throw new Error('Project not found. Please check your VERCEL_PROJECT_ID.');
      } else {
        throw new Error(`Vercel API error: ${response.status} ${response.statusText} - ${errorText}`);
      }
    }

    const data = await response.json();
    
    if (!data.deployments || data.deployments.length === 0) {
      console.error('No deployments found');
      return res.status(200).json({
        build: 'no deployments',
        deploy: 'no deployments',
        tests: 'no deployments'
      });
    }

    const latestDeployment = data.deployments[0];
    console.log('Latest deployment:', {
      state: latestDeployment.state,
      readyState: latestDeployment.readyState,
      checksState: latestDeployment.checksState
    });

    // Map Vercel states to our status format
    const stateMap = {
      'READY': 'success',
      'ERROR': 'failed',
      'CANCELED': 'canceled',
      'BUILDING': 'in progress',
      'INITIALIZING': 'starting',
      'QUEUED': 'queued'
    };

    const buildStatus = {
      build: stateMap[latestDeployment.readyState] || latestDeployment.readyState.toLowerCase(),
      deploy: stateMap[latestDeployment.state] || latestDeployment.state.toLowerCase(),
      tests: latestDeployment.checksState === 'completed' ? 'passing' : 
             latestDeployment.checksState === 'running' ? 'in progress' : 'pending'
    };

    res.status(200).json(buildStatus);
  } catch (error) {
    console.error('Error in deployment-status API:', error);
    res.status(500).json({
      build: 'error',
      deploy: 'error',
      tests: 'error',
      error: error.message
    });
  }
}