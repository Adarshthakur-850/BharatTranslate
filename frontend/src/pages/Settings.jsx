import React from 'react';
import { Settings as SettingsIcon, Database, Server, Cpu } from 'lucide-react';

const Settings = () => {
  return (
    <div className="pt-8 space-y-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 flex items-center space-x-2">
        <SettingsIcon className="text-blue-600" />
        <span>System Settings</span>
      </h1>

      <div className="bg-white rounded-xl shadow-md p-6 space-y-8">
        {/* Model Setting */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold border-b pb-2 flex items-center">
            <Database className="w-5 h-5 mr-2 text-gray-500" />
            Model Configuration
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Active Model</label>
              <select className="w-full px-3 py-2 border rounded-md bg-gray-50">
                <option>IndicTrans2 (200M)</option>
                <option>mBART-50 (Large)</option>
                <option>IndicBART</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Inference Engine</label>
              <select className="w-full px-3 py-2 border rounded-md bg-gray-50">
                <option>PyTorch (FP16)</option>
                <option>ONNX Runtime</option>
                <option>TensorRT</option>
              </select>
            </div>
          </div>
        </div>

        {/* Server Setting */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold border-b pb-2 flex items-center">
            <Server className="w-5 h-5 mr-2 text-gray-500" />
            Backend Connection
          </h2>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">API Endpoint URL</label>
            <input 
              type="text" 
              defaultValue="http://localhost:8000/api/v1"
              className="w-full px-3 py-2 border rounded-md bg-white font-mono text-sm shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        {/* Resources */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold border-b pb-2 flex items-center">
            <Cpu className="w-5 h-5 mr-2 text-gray-500" />
            Resource Usage (Mock)
          </h2>
          <div className="bg-gray-50 p-4 rounded-lg flex justify-between items-center text-sm">
            <span><strong>GPU:</strong> Nvidia T4 (16GB) - Util: 45%</span>
            <span><strong>RAM:</strong> 8.4 / 32 GB</span>
            <span className="text-green-600 font-medium font-mono">Status: Healthy</span>
          </div>
        </div>

        <div className="pt-4 flex justify-end">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
