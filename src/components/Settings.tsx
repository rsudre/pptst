import React, { useState } from 'react';
import { 
  Settings as SettingsIcon, 
  User, 
  Bell, 
  Mail, 
  Shield, 
  Database,
  Palette,
  Save,
  Check
} from 'lucide-react';

const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState('general');
  const [notifications, setNotifications] = useState({
    expiration30: true,
    expiration60: true,
    expiration90: true,
    compliance: true,
    costs: true,
    audits: true
  });

  const tabs = [
    { id: 'general', label: 'Geral', icon: SettingsIcon },
    { id: 'users', label: 'Utilizadores', icon: User },
    { id: 'notifications', label: 'Notificações', icon: Bell },
    { id: 'security', label: 'Segurança', icon: Shield },
    { id: 'data', label: 'Dados', icon: Database },
    { id: 'appearance', label: 'Aparência', icon: Palette }
  ];

  const users = [
    {
      id: 1,
      name: 'João Silva',
      email: 'joao.silva@empresa.com',
      role: 'Administrador',
      status: 'Ativo',
      lastAccess: '2024-01-15'
    },
    {
      id: 2,
      name: 'Maria Santos',
      email: 'maria.santos@empresa.com',
      role: 'Gestor',
      status: 'Ativo',
      lastAccess: '2024-01-14'
    },
    {
      id: 3,
      name: 'Pedro Costa',
      email: 'pedro.costa@empresa.com',
      role: 'Utilizador',
      status: 'Inativo',
      lastAccess: '2024-01-10'
    }
  ];

  const handleNotificationChange = (key: string) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Configurações</h1>
        <p className="text-gray-600 mt-1">Configure as definições do sistema e preferências</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-6 font-medium text-sm border-b-2 flex items-center space-x-2 whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'general' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Configurações Gerais</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nome da Organização
                    </label>
                    <input
                      type="text"
                      defaultValue="Empresa Exemplo Lda."
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Moeda Padrão
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                      <option value="EUR">EUR (€)</option>
                      <option value="USD">USD ($)</option>
                      <option value="GBP">GBP (£)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Fuso Horário
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                      <option value="Europe/Lisbon">Europa/Lisboa</option>
                      <option value="Europe/London">Europa/Londres</option>
                      <option value="America/New_York">América/Nova York</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Idioma
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                      <option value="pt">Português</option>
                      <option value="en">English</option>
                      <option value="es">Español</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-3">Configurações de Alerta</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">Alertas de expiração automáticos</span>
                    <input type="checkbox" defaultChecked className="rounded" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">Relatórios mensais automáticos</span>
                    <input type="checkbox" defaultChecked className="rounded" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">Sincronização automática de APIs</span>
                    <input type="checkbox" defaultChecked className="rounded" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'users' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-900">Gestão de Utilizadores</h3>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  + Novo Utilizador
                </button>
              </div>

              <div className="overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Utilizador
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Função
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Último Acesso
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Ações
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {users.map((user) => (
                      <tr key={user.id}>
                        <td className="px-6 py-4">
                          <div>
                            <div className="font-medium text-gray-900">{user.name}</div>
                            <div className="text-sm text-gray-500">{user.email}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900">{user.role}</td>
                        <td className="px-6 py-4">
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                            user.status === 'Ativo' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {user.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900">
                          {new Date(user.lastAccess).toLocaleDateString('pt-PT')}
                        </td>
                        <td className="px-6 py-4">
                          <button className="text-blue-600 hover:text-blue-900 text-sm">
                            Editar
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'notifications' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Configurações de Notificação</h3>
                <p className="text-sm text-gray-600 mb-6">
                  Configure quando e como receber notificações sobre o seu portfólio de licenças.
                </p>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3 flex items-center">
                      <Mail className="w-4 h-4 mr-2" />
                      Alertas de Expiração
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <span className="font-medium text-gray-900">30 dias antes da expiração</span>
                          <p className="text-sm text-gray-500">Alerta crítico para renovação urgente</p>
                        </div>
                        <input 
                          type="checkbox" 
                          checked={notifications.expiration30}
                          onChange={() => handleNotificationChange('expiration30')}
                          className="rounded"
                        />
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <span className="font-medium text-gray-900">60 dias antes da expiração</span>
                          <p className="text-sm text-gray-500">Alerta de planeamento</p>
                        </div>
                        <input 
                          type="checkbox" 
                          checked={notifications.expiration60}
                          onChange={() => handleNotificationChange('expiration60')}
                          className="rounded"
                        />
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <span className="font-medium text-gray-900">90 dias antes da expiração</span>
                          <p className="text-sm text-gray-500">Alerta preventivo</p>
                        </div>
                        <input 
                          type="checkbox" 
                          checked={notifications.expiration90}
                          onChange={() => handleNotificationChange('expiration90')}
                          className="rounded"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-3 flex items-center">
                      <Shield className="w-4 h-4 mr-2" />
                      Compliance e Riscos
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <span className="font-medium text-gray-900">Problemas de conformidade</span>
                          <p className="text-sm text-gray-500">Sublicenciamento e não conformidade</p>
                        </div>
                        <input 
                          type="checkbox" 
                          checked={notifications.compliance}
                          onChange={() => handleNotificationChange('compliance')}
                          className="rounded"
                        />
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <span className="font-medium text-gray-900">Alertas de custo</span>
                          <p className="text-sm text-gray-500">Variações significativas nos custos</p>
                        </div>
                        <input 
                          type="checkbox" 
                          checked={notifications.costs}
                          onChange={() => handleNotificationChange('costs')}
                          className="rounded"
                        />
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <span className="font-medium text-gray-900">Lembretes de auditoria</span>
                          <p className="text-sm text-gray-500">Próximas auditorias programadas</p>
                        </div>
                        <input 
                          type="checkbox" 
                          checked={notifications.audits}
                          onChange={() => handleNotificationChange('audits')}
                          className="rounded"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'security' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Configurações de Segurança</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Autenticação</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-700">Autenticação de dois fatores (2FA)</span>
                        <input type="checkbox" className="rounded" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-700">Logout automático após inatividade</span>
                        <input type="checkbox" defaultChecked className="rounded" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Logs de Auditoria</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-700">Registar acessos ao sistema</span>
                        <input type="checkbox" defaultChecked className="rounded" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-700">Registar alterações de dados</span>
                        <input type="checkbox" defaultChecked className="rounded" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'data' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Gestão de Dados</h3>
                
                <div className="space-y-6">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-medium text-blue-900 mb-2">Backup Automático</h4>
                    <p className="text-sm text-blue-800 mb-3">
                      Os seus dados são automaticamente copiados de segurança diariamente.
                    </p>
                    <div className="flex space-x-3">
                      <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">
                        Criar Backup Manual
                      </button>
                      <button className="px-3 py-1 border border-blue-300 text-blue-600 text-sm rounded hover:bg-blue-100">
                        Ver Histórico
                      </button>
                    </div>
                  </div>

                  <div className="p-4 bg-yellow-50 rounded-lg">
                    <h4 className="font-medium text-yellow-900 mb-2">Exportação de Dados</h4>
                    <p className="text-sm text-yellow-800 mb-3">
                      Exporte todos os seus dados em formato Excel ou CSV.
                    </p>
                    <button className="px-3 py-1 bg-yellow-600 text-white text-sm rounded hover:bg-yellow-700">
                      Exportar Dados
                    </button>
                  </div>

                  <div className="p-4 bg-red-50 rounded-lg">
                    <h4 className="font-medium text-red-900 mb-2">Eliminação de Dados</h4>
                    <p className="text-sm text-red-800 mb-3">
                      Elimine permanentemente todos os dados da conta. Esta ação não pode ser revertida.
                    </p>
                    <button className="px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700">
                      Eliminar Conta
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'appearance' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Personalização</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Tema</h4>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="border border-gray-300 rounded-lg p-4 cursor-pointer hover:border-blue-500">
                        <div className="w-full h-20 bg-white rounded mb-2 border"></div>
                        <span className="text-sm font-medium">Claro</span>
                      </div>
                      <div className="border border-gray-300 rounded-lg p-4 cursor-pointer hover:border-blue-500">
                        <div className="w-full h-20 bg-gray-800 rounded mb-2"></div>
                        <span className="text-sm font-medium">Escuro</span>
                      </div>
                      <div className="border border-gray-300 rounded-lg p-4 cursor-pointer hover:border-blue-500">
                        <div className="w-full h-20 bg-gradient-to-br from-white to-gray-800 rounded mb-2"></div>
                        <span className="text-sm font-medium">Auto</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Densidade</h4>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input type="radio" name="density" className="mr-3" />
                        <span className="text-sm">Compacta</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="density" defaultChecked className="mr-3" />
                        <span className="text-sm">Normal</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="density" className="mr-3" />
                        <span className="text-sm">Confortável</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="flex justify-end pt-6 border-t border-gray-200">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center space-x-2">
              <Save className="w-4 h-4" />
              <span>Guardar Alterações</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;