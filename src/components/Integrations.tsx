import React, { useState } from 'react';
import { Plug, Plus, Settings, CheckCircle, AlertTriangle, Clock, Key, Globe, RefreshCw as Refresh, Upload } from 'lucide-react';

const Integrations: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('apis');

  const integrations = [
    {
      id: 1,
      name: 'Microsoft Graph API',
      endpoint: 'https://graph.microsoft.com/v1.0',
      status: 'active',
      lastSync: '2024-01-15 14:30:00',
      frequency: 'Diária',
      authType: 'OAuth 2.0',
      products: ['Microsoft 365', 'Azure AD'],
      records: 1250
    },
    {
      id: 2,
      name: 'Oracle License Manager',
      endpoint: 'https://api.oracle.com/license/v1',
      status: 'warning',
      lastSync: '2024-01-12 09:15:00',
      frequency: 'Semanal',
      authType: 'API Key',
      products: ['Oracle Database', 'Java'],
      records: 45
    },
    {
      id: 3,
      name: 'AWS License Manager',
      endpoint: 'https://license-manager.amazonaws.com',
      status: 'active',
      lastSync: '2024-01-15 16:45:00',
      frequency: 'Em tempo real',
      authType: 'IAM Role',
      products: ['EC2', 'RDS', 'Support'],
      records: 89
    },
    {
      id: 4,
      name: 'Red Hat Satellite',
      endpoint: 'https://satellite.redhat.com/api/v2',
      status: 'inactive',
      lastSync: '2024-01-10 11:20:00',
      frequency: 'Semanal',
      authType: 'Token Bearer',
      products: ['RHEL', 'OpenShift'],
      records: 67
    }
  ];

  const manualEntries = [
    {
      id: 1,
      supplier: 'VMware',
      product: 'vSphere Enterprise Plus',
      licenses: 24,
      cost: '€35,400',
      addedBy: 'João Silva',
      addedDate: '2024-01-10'
    },
    {
      id: 2,
      supplier: 'Adobe',
      product: 'Creative Cloud Enterprise',
      licenses: 15,
      cost: '€8,970',
      addedBy: 'Maria Santos',
      addedDate: '2024-01-08'
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            <CheckCircle className="w-3 h-3 mr-1" />
            Ativo
          </span>
        );
      case 'warning':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
            <AlertTriangle className="w-3 h-3 mr-1" />
            Atenção
          </span>
        );
      case 'inactive':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
            <Clock className="w-3 h-3 mr-1" />
            Inativo
          </span>
        );
      default:
        return null;
    }
  };

  const APIModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl mx-4">
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Nova Integração API</h2>
          <button 
            onClick={() => setIsModalOpen(false)}
            className="text-gray-400 hover:text-gray-600"
          >
            ✕
          </button>
        </div>
        <div className="p-6 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nome da Integração
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Ex: Microsoft Graph API"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Endpoint da API
            </label>
            <input
              type="url"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="https://api.exemplo.com/v1"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tipo de Autenticação
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                <option>API Key</option>
                <option>OAuth 2.0</option>
                <option>Token Bearer</option>
                <option>Basic Auth</option>
                <option>IAM Role</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Frequência de Atualização
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                <option>Em tempo real</option>
                <option>A cada hora</option>
                <option>Diária</option>
                <option>Semanal</option>
                <option>Mensal</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Chave da API / Token
            </label>
            <input
              type="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Cole aqui a sua chave de API"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Produtos Suportados
            </label>
            <textarea
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              rows={3}
              placeholder="Liste os produtos que serão sincronizados através desta API"
            />
          </div>
        </div>
        <div className="flex justify-end space-x-3 p-6 border-t border-gray-200">
          <button
            onClick={() => setIsModalOpen(false)}
            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
          >
            Cancelar
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Testar & Guardar
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Integrações (APIs)</h1>
          <p className="text-gray-600 mt-1">Configure integrações automáticas ou adicione licenças manualmente</p>
        </div>
        <div className="flex space-x-3">
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
          >
            <Plus className="w-4 h-4" />
            <span>Nova Integração</span>
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex">
            <button
              onClick={() => setActiveTab('apis')}
              className={`py-3 px-6 font-medium text-sm border-b-2 ${
                activeTab === 'apis'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Integrações API
            </button>
            <button
              onClick={() => setActiveTab('manual')}
              className={`py-3 px-6 font-medium text-sm border-b-2 ${
                activeTab === 'manual'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Cadastro Manual
            </button>
          </nav>
        </div>

        {activeTab === 'apis' && (
          <div className="p-6">
            <div className="grid gap-6">
              {integrations.map((integration) => (
                <div key={integration.id} className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <Plug className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{integration.name}</h3>
                        <p className="text-sm text-gray-500">{integration.endpoint}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      {getStatusBadge(integration.status)}
                      <button className="p-2 text-gray-400 hover:text-blue-600">
                        <Settings className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Key className="w-4 h-4" />
                      <span>{integration.authType}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>{integration.frequency}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Globe className="w-4 h-4" />
                      <span>{integration.records} registos</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Refresh className="w-4 h-4" />
                      <span>{new Date(integration.lastSync).toLocaleDateString('pt-PT')}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Produtos Sincronizados:</p>
                      <div className="flex flex-wrap gap-1">
                        {integration.products.map((product, index) => (
                          <span 
                            key={index}
                            className="inline-flex items-center px-2 py-1 rounded text-xs bg-gray-100 text-gray-700"
                          >
                            {product}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="px-3 py-1 text-sm border border-gray-300 text-gray-700 rounded hover:bg-gray-50">
                        Testar
                      </button>
                      <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">
                        Sincronizar Agora
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'manual' && (
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">
                Para fornecedores sem integração disponível, adicione licenças manualmente
              </p>
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center space-x-2">
                <Upload className="w-4 h-4" />
                <span>Adicionar Licença</span>
              </button>
            </div>

            <div className="space-y-4">
              {manualEntries.map((entry) => (
                <div key={entry.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-gray-100 rounded-lg">
                        <Upload className="w-5 h-5 text-gray-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">{entry.product}</h3>
                        <p className="text-sm text-gray-500">{entry.supplier}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-6">
                      <div className="text-right">
                        <p className="text-sm font-medium text-gray-900">{entry.licenses} licenças</p>
                        <p className="text-sm text-gray-500">{entry.cost}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-500">Adicionado por {entry.addedBy}</p>
                        <p className="text-sm text-gray-500">{new Date(entry.addedDate).toLocaleDateString('pt-PT')}</p>
                      </div>
                      <button className="p-2 text-gray-400 hover:text-blue-600">
                        <Settings className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-blue-600">i</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-blue-900">Dica: Integração Automática</h4>
                  <p className="text-sm text-blue-700 mt-1">
                    Sempre que possível, prefira configurar integrações automáticas para manter os dados sempre atualizados 
                    e reduzir o trabalho manual de gestão de licenças.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {isModalOpen && <APIModal />}
    </div>
  );
};

export default Integrations;