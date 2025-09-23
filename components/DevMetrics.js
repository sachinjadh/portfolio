import React, { useEffect, useState } from 'react';

const DevMetrics = () => {
  const [metrics, setMetrics] = useState({
    currentStack: "Next.js, React, Node.js + Fast API",
    lastCommit: "",
    contributionStreak: 0,
    monthlyCommits: 0,
    visitorCount: 0,
    pipelineStatus: {
      build: 'loading',
      deploy: 'loading',
      tests: 'loading'
    }
  });
  
  const [loading, setLoading] = useState({
    github: true,
    vercel: true
  });

  useEffect(() => {
    // Initialize visitor counter
    const initVisitorCount = () => {
      const storedCount = localStorage.getItem('visitorCount');
      const newCount = storedCount ? parseInt(storedCount) + 1 : 1;
      localStorage.setItem('visitorCount', newCount.toString());
      setMetrics(prev => ({ ...prev, visitorCount: newCount }));
    };

    // Fetch deployment status from Vercel
    const fetchDeploymentStatus = async () => {
      setLoading(prev => ({ ...prev, vercel: true }));
      try {
        const response = await fetch('/api/deployment-status');
        const data = await response.json();
        setMetrics(prev => ({
          ...prev,
          pipelineStatus: data
        }));
      } catch (error) {
        console.error('Error fetching deployment status:', error);
        setMetrics(prev => ({
          ...prev,
          pipelineStatus: {
            build: 'error',
            deploy: 'error',
            tests: 'error'
          }
        }));
      } finally {
        setLoading(prev => ({ ...prev, vercel: false }));
      }
    };

    // Fetch GitHub statistics
    const fetchGitHubStats = async () => {
      setLoading(prev => ({ ...prev, github: true }));
      try {
        const username = 'sachinjadh';
        const response = await fetch(`https://api.github.com/users/${username}/events`);
        const data = await response.json();
        
        // Get last commit
        const lastCommit = data.find(event => event.type === 'PushEvent');
        const lastCommitMessage = lastCommit ? lastCommit.payload.commits[0].message : 'No recent commits';
        const lastCommitDate = lastCommit ? new Date(lastCommit.created_at).toLocaleDateString() : '';

        setMetrics(prev => ({
          ...prev,
          lastCommit: `${lastCommitMessage} (${lastCommitDate})`,
          monthlyCommits: data.filter(event => 
            event.type === 'PushEvent' && 
            new Date(event.created_at) > new Date(Date.now() - 30*24*60*60*1000)
          ).length
        }));
      } catch (error) {
        console.error('Error fetching GitHub stats:', error);
        setMetrics(prev => ({
          ...prev,
          lastCommit: 'Error loading commits',
          monthlyCommits: 0
        }));
      } finally {
        setLoading(prev => ({ ...prev, github: false }));
      }
    };

    initVisitorCount();
    fetchGitHubStats();
    fetchDeploymentStatus();
    
    // Refresh GitHub stats every 30 minutes
    const githubInterval = setInterval(fetchGitHubStats, 30 * 60 * 1000);
    // Refresh deployment status every minute
    const deployInterval = setInterval(fetchDeploymentStatus, 60 * 1000);
    
    return () => {
      clearInterval(githubInterval);
      clearInterval(deployInterval);
    };
  }, []);

  return (
    <section id="metrics" className="py-10 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
            Live Dev Metrics
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Current Stack Badge */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg shadow-sm">
            <div className="flex items-center space-x-3">
              <div className="text-2xl">⚡</div>
              <div>
                <h3 className="text-sm font-semibold text-gray-600">Currently Working With</h3>
                <p className="text-lg font-medium text-gray-800">{metrics.currentStack}</p>
              </div>
            </div>
          </div>

          {/* Latest Commit */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg shadow-sm">
            <div className="flex items-center space-x-3">
              <div className="text-2xl">📝</div>
              <div>
                <h3 className="text-sm font-semibold text-gray-600">Latest Commit</h3>
                <p className="text-lg font-medium text-gray-800 truncate">
                  {loading.github ? (
                    <span className="flex items-center">
                      <svg className="animate-spin h-5 w-5 mr-2 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Loading commits...
                    </span>
                  ) : metrics.lastCommit}
                </p>
              </div>
            </div>
          </div>

          {/* Monthly Commits */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg shadow-sm">
            <div className="flex items-center space-x-3">
              <div className="text-2xl">📊</div>
              <div>
                <h3 className="text-sm font-semibold text-gray-600">30-Day Commits</h3>
                <p className="text-lg font-medium text-gray-800">
                  {loading.github ? (
                    <span className="flex items-center">
                      <svg className="animate-spin h-5 w-5 mr-2 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Loading stats...
                    </span>
                  ) : `${metrics.monthlyCommits} commits in the last 30 days`}
                </p>
              </div>
            </div>
          </div>

          {/* GitHub Stats Badge */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg shadow-sm">
            <div className="flex items-center space-x-3">
              <div className="text-2xl">🔥</div>
              <div>
                <h3 className="text-sm font-semibold text-gray-600">GitHub Stats</h3>
                <img 
                  src={`https://github-readme-stats.vercel.app/api?username=sachinjadh&show_icons=true&hide_border=true&count_private=true&theme=dark`}
                  alt="GitHub Stats"
                  className="mt-2 w-full rounded"
                />
              </div>
            </div>
          </div>
        </div>

        {/* DevOps Pipeline Status */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="text-xl">🔄</div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-600">Build</h3>
                  <div className="flex items-center space-x-2">
                    <div className={`w-2 h-2 rounded-full ${
                      loading.vercel
                        ? 'bg-blue-500 animate-pulse'
                        : metrics.pipelineStatus.build === 'success' || metrics.pipelineStatus.build === 'passing' 
                        ? 'bg-green-500' 
                        : metrics.pipelineStatus.build === 'error' || metrics.pipelineStatus.build === 'failed'
                        ? 'bg-red-500'
                        : metrics.pipelineStatus.build === 'in progress' || metrics.pipelineStatus.build === 'queued'
                        ? 'bg-yellow-500 animate-pulse'
                        : 'bg-gray-500'
                    }`}></div>
                    <p className="text-sm font-medium text-gray-800">
                      {loading.vercel 
                        ? (
                          <span className="flex items-center">
                            <svg className="animate-spin h-4 w-4 mr-2 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Loading...
                          </span>
                        )
                        : metrics.pipelineStatus.build === 'in progress' 
                        ? 'Building...' 
                        : metrics.pipelineStatus.build}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="text-xl">🚀</div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-600">Deploy</h3>
                  <div className="flex items-center space-x-2">
                    <div className={`w-2 h-2 rounded-full ${
                      metrics.pipelineStatus.deploy === 'success'
                        ? 'bg-green-500' 
                        : metrics.pipelineStatus.deploy === 'error' || metrics.pipelineStatus.deploy === 'failed'
                        ? 'bg-red-500'
                        : metrics.pipelineStatus.deploy === 'in progress' || metrics.pipelineStatus.deploy === 'queued'
                        ? 'bg-yellow-500 animate-pulse'
                        : 'bg-gray-500'
                    }`}></div>
                    <p className="text-sm font-medium text-gray-800">
                      {metrics.pipelineStatus.deploy === 'in progress' 
                        ? 'Deploying...' 
                        : metrics.pipelineStatus.deploy}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="text-xl">🎯</div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-600">Tests</h3>
                  <div className="flex items-center space-x-2">
                    <div className={`w-2 h-2 rounded-full ${
                      metrics.pipelineStatus.tests === 'passing'
                        ? 'bg-green-500' 
                        : metrics.pipelineStatus.tests === 'error' || metrics.pipelineStatus.tests === 'failed'
                        ? 'bg-red-500'
                        : metrics.pipelineStatus.tests === 'in progress'
                        ? 'bg-yellow-500 animate-pulse'
                        : 'bg-gray-500'
                    }`}></div>
                    <p className="text-sm font-medium text-gray-800">
                      {metrics.pipelineStatus.tests === 'in progress' 
                        ? 'Running...' 
                        : metrics.pipelineStatus.tests}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Visitor Counter */}
        <div className="mt-6 bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg shadow-sm text-center">
          <div className="flex items-center justify-center space-x-2">
            <div className="text-xl">👋</div>
            <p className="text-lg font-medium text-gray-800">
              You're visitor #{metrics.visitorCount}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default DevMetrics;