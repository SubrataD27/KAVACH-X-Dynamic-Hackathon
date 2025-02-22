import React, { useState, useEffect } from 'react';
import { 
  Activity, AlertTriangle, Box, Camera, Cpu, Gauge, GitCommit, MapPin, 
  Shield, Zap, BarChart2, Clock, HardDrive, Radio, Target, PenTool as Tool, 
  AlertOctagon, CheckCircle, XCircle, ArrowUpCircle, Link
} from 'lucide-react';

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [proximityData, setProximityData] = useState({
    frontDistance: 8.2,
    rearDistance: 12.5,
    leftDistance: 5.7,
    rightDistance: 9.1,
  });

  const [systemStatus, setSystemStatus] = useState({
    lidarStatus: 'Operational',
    gpsStatus: 'Connected',
    cameraStatus: 'Active',
    aiStatus: 'Processing',
    edgeComputing: 'Online',
    blockchain: 'Synced',
  });

  const [alerts, setAlerts] = useState([
    { id: 1, type: 'WARNING', message: 'Worker detected in blind spot', timestamp: '10:42:15', priority: 'high' },
    { id: 2, type: 'CAUTION', message: 'Approaching geofence boundary', timestamp: '10:42:10', priority: 'medium' },
    { id: 3, type: 'INFO', message: 'System performing optimally', timestamp: '10:42:05', priority: 'low' },
  ]);

  const [safetyMetrics, setSafetyMetrics] = useState({
    collisionPrevention: 98,
    geofenceCompliance: 100,
    operatorAlertness: 95,
    systemHealth: 97,
  });

  const [maintenanceAlerts, setMaintenanceAlerts] = useState([
    { component: 'LIDAR Sensor', status: 'Optimal', nextService: '15 days' },
    { component: 'Brake System', status: 'Attention Needed', nextService: '2 days' },
    { component: 'GPS Module', status: 'Optimal', nextService: '30 days' },
  ]);

  const [recentActions, setRecentActions] = useState([
    { time: '10:41:23', action: 'Emergency stop triggered', status: 'Resolved' },
    { time: '10:40:15', action: 'Speed reduction activated', status: 'Active' },
    { time: '10:39:45', action: 'Geofence warning issued', status: 'Resolved' },
  ]);

  // Simulate real-time data updates
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());

      // Update proximity data with random fluctuations
      setProximityData(prev => ({
        frontDistance: Math.max(0, prev.frontDistance + (Math.random() - 0.5) * 2),
        rearDistance: Math.max(0, prev.rearDistance + (Math.random() - 0.5) * 2),
        leftDistance: Math.max(0, prev.leftDistance + (Math.random() - 0.5) * 2),
        rightDistance: Math.max(0, prev.rightDistance + (Math.random() - 0.5) * 2),
      }));

      // Update safety metrics with small random changes
      setSafetyMetrics(prev => ({
        collisionPrevention: Math.min(100, Math.max(90, prev.collisionPrevention + (Math.random() - 0.5) * 2)),
        geofenceCompliance: Math.min(100, Math.max(90, prev.geofenceCompliance + (Math.random() - 0.5) * 2)),
        operatorAlertness: Math.min(100, Math.max(90, prev.operatorAlertness + (Math.random() - 0.5) * 2)),
        systemHealth: Math.min(100, Math.max(90, prev.systemHealth + (Math.random() - 0.5) * 2)),
      }));

      // Randomly add new alerts (20% chance)
      if (Math.random() < 0.2) {
        const newAlert = {
          id: Date.now(),
          type: ['WARNING', 'CAUTION', 'INFO'][Math.floor(Math.random() * 3)],
          message: [
            'New worker detected in operation zone',
            'Wind speed increasing',
            'Load weight fluctuation detected',
            'Approaching maximum reach limit',
            'Weather conditions changing'
          ][Math.floor(Math.random() * 5)],
          timestamp: new Date().toLocaleTimeString(),
          priority: ['high', 'medium', 'low'][Math.floor(Math.random() * 3)]
        };
        setAlerts(prev => [newAlert, ...prev.slice(0, 2)]);
      }

      // Randomly update system status (10% chance)
      if (Math.random() < 0.1) {
        const systems = ['lidarStatus', 'gpsStatus', 'cameraStatus', 'aiStatus', 'edgeComputing', 'blockchain'];
        const randomSystem = systems[Math.floor(Math.random() * systems.length)];
        const newStatus = Math.random() < 0.8 ? 'Operational' : 'Attention Required';
        setSystemStatus(prev => ({ ...prev, [randomSystem]: newStatus }));
      }

      // Add new actions (15% chance)
      if (Math.random() < 0.15) {
        const newAction = {
          time: new Date().toLocaleTimeString(),
          action: [
            'Speed adjustment initiated',
            'Proximity warning triggered',
            'Load balance checked',
            'Emergency protocol activated',
            'System diagnostic completed'
          ][Math.floor(Math.random() * 5)],
          status: Math.random() < 0.7 ? 'Active' : 'Resolved'
        };
        setRecentActions(prev => [newAction, ...prev.slice(0, 2)]);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-6">
      {/* Header */}
      <header className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <Shield className="w-10 h-10 text-blue-500" />
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              KAVACH-X Dashboard
            </h1>
            <p className="text-gray-400">Advanced Crane Safety System</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="px-4 py-2 bg-green-500/20 text-green-400 rounded-full flex items-center gap-2">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            System Online
          </div>
          <div className="text-gray-400">
            {currentTime.toLocaleTimeString()}
          </div>
        </div>
      </header>

      <div className="grid grid-cols-12 gap-6">
        {/* Main Monitoring Panel */}
        <div className="col-span-8 grid grid-rows-2 gap-6">
          {/* Proximity Monitor */}
          <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700">
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Activity className="text-blue-500" /> Real-Time Proximity Monitor
            </h2>
            <div className="grid grid-cols-2 gap-6">
              {Object.entries(proximityData).map(([direction, distance]) => (
                <div key={direction} className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-400 capitalize">{direction.replace('Distance', '')}</span>
                    <Gauge className="text-blue-500" />
                  </div>
                  <div className="text-3xl font-bold">{distance.toFixed(1)}m</div>
                  <div className="h-2 bg-gray-700 rounded-full mt-2">
                    <div 
                      className={`h-2 rounded-full transition-all duration-300 ${distance < 6 ? 'bg-red-500' : 'bg-blue-500'}`}
                      style={{ width: `${Math.min(distance * 10, 100)}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Safety Metrics */}
          <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700">
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <BarChart2 className="text-purple-500" /> Safety Performance Metrics
            </h2>
            <div className="grid grid-cols-2 gap-6">
              {Object.entries(safetyMetrics).map(([metric, value]) => (
                <div key={metric} className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-400 capitalize">
                      {metric.replace(/([A-Z])/g, ' $1').trim()}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-sm ${
                      value >= 95 ? 'bg-green-500/20 text-green-400' :
                      value >= 80 ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {value.toFixed(1)}%
                    </span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full mt-2">
                    <div 
                      className={`h-2 rounded-full transition-all duration-300 ${
                        value >= 95 ? 'bg-green-500' :
                        value >= 80 ? 'bg-yellow-500' :
                        'bg-red-500'
                      }`}
                      style={{ width: `${value}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side Panels */}
        <div className="col-span-4 grid grid-rows-2 gap-6">
          {/* System Status */}
          <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700">
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Cpu className="text-purple-500" /> System Status
            </h2>
            <div className="space-y-4">
              {Object.entries(systemStatus).map(([system, status]) => (
                <div key={system} className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                  <div className="flex items-center gap-3">
                    {system === 'lidarStatus' && <Box className="text-purple-500" />}
                    {system === 'gpsStatus' && <MapPin className="text-purple-500" />}
                    {system === 'cameraStatus' && <Camera className="text-purple-500" />}
                    {system === 'aiStatus' && <GitCommit className="text-purple-500" />}
                    {system === 'edgeComputing' && <HardDrive className="text-purple-500" />}
                    {system === 'blockchain' && <Link className="text-purple-500" />}
                    <span className="capitalize">{system.replace('Status', '').replace(/([A-Z])/g, ' $1').trim()}</span>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    status === 'Operational' || status === 'Connected' || status === 'Active' || status === 'Online' || status === 'Synced'
                      ? 'bg-green-500/20 text-green-400'
                      : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Maintenance Status */}
          <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700">
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Tool className="text-yellow-500" /> Maintenance Status
            </h2>
            <div className="space-y-4">
              {maintenanceAlerts.map((item, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-3 border border-gray-700">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${
                        item.status === 'Optimal' ? 'bg-green-500' : 'bg-yellow-500'
                      }`}></span>
                      <span>{item.component}</span>
                    </div>
                    <span className="text-sm text-gray-400">Next: {item.nextService}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Panels */}
        <div className="col-span-12 grid grid-cols-2 gap-6">
          {/* Recent Actions */}
          <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700">
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Clock className="text-blue-500" /> Recent Safety Actions
            </h2>
            <div className="space-y-4">
              {recentActions.map((action, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                  <div className="flex items-center gap-3">
                    <span className="text-gray-400">{action.time}</span>
                    <span>{action.action}</span>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    action.status === 'Active' ? 'bg-blue-500/20 text-blue-400' : 'bg-green-500/20 text-green-400'
                  }`}>
                    {action.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Alert Panel */}
          <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700">
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <AlertTriangle className="text-yellow-500" /> Real-Time Alerts
            </h2>
            <div className="space-y-4">
              {alerts.map((alert) => (
                <div key={alert.id} className={`flex items-center justify-between p-4 rounded-lg ${
                  alert.type === 'WARNING' ? 'bg-red-500/20 border border-red-500/50' :
                  alert.type === 'CAUTION' ? 'bg-yellow-500/20 border border-yellow-500/50' :
                  'bg-blue-500/20 border border-blue-500/50'
                }`}>
                  <div className="flex items-center gap-3">
                    <Zap className={`${
                      alert.type === 'WARNING' ? 'text-red-500' :
                      alert.type === 'CAUTION' ? 'text-yellow-500' :
                      'text-blue-500'
                    }`} />
                    <div>
                      <div className="font-semibold">{alert.type}</div>
                      <div className="text-gray-400">{alert.message}</div>
                    </div>
                  </div>
                  <div className="text-gray-400">{alert.timestamp}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;