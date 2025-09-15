import React from 'react';
import { 
  TrendingUp, 
  DollarSign, 
  Shield, 
  AlertTriangle,
  CheckCircle,
  Clock,
  Users,
  Server
} from 'lucide-react';

const Dashboard: React.FC = () => {
  const kpis = [
    {
      title: 'Total de Licenças Compradas',
      value: '2,847',
      change: '+12%',
      icon: Server,
      color: 'blue'
    },
    {
      title: 'Total em Uso',
      value: '2,341',
      change: '+8%',
      icon: Users,
      color: 'green'
    },
    {
      title: '% de Compliance',
      value: '94.2%',
      change: '+2.1%',
      icon: Shield,
      color: 'emerald'
    },
    {
      title: 'Custo Total Anual',
      value: '€847K',
      change: '+15%',
      icon: DollarSign,
      color: 'purple'
    }
  ];

  const expirations = [
    { product: 'Microsoft 365 Business', supplier: 'Microsoft', days: 15, risk: 'high' },
    { product: 'Red Hat Enterprise Linux', supplier: 'Red Hat', days: 32, risk: 'medium' },
    { product: 'Oracle Database Enterprise', supplier: 'Oracle', days: 67, risk: 'low' },
    { product: 'AWS Support Business', supplier: 'AWS', days: 89, risk: 'low' },
  ];

  const supplierData = [
    { name: 'Microsoft', value: 35, color: '#0078D4' },
    { name: 'Oracle', value: 28, color: '#F80000' },
    { name: 'Red Hat', value: 18, color: '#EE0000' },
    { name: 'AWS', value: 12, color: '#FF9900' },
    { name: 'Outros', value: 7, color: '#6B7280' },
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">Visão geral do seu portfólio de licenças</p>
        </div>
        <div className="flex space-x-3">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Gerar Relatório
          </button>
          <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
            Exportar Dados
          </button>
        </div>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpis.map((kpi, index) => {
          const Icon = kpi.icon;
          return (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div className={`p-3 rounded-lg bg-${kpi.color}-100`}>
                  <Icon className={`w-6 h-6 text-${kpi.color}-600`} />
                </div>
                <span className={`text-sm font-medium ${
                  kpi.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                }`}>
                  {kpi.change}
                </span>
              </div>
              <div className="mt-4">
                <h3 className="text-2xl font-bold text-gray-900">{kpi.value}</h3>
                <p className="text-gray-600 text-sm">{kpi.title}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Próximas Expirações */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Próximas Expirações</h2>
            <Clock className="w-5 h-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            {expirations.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{item.product}</p>
                  <p className="text-sm text-gray-500">{item.supplier}</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-sm font-medium text-gray-900">{item.days} dias</span>
                  <div className={`w-3 h-3 rounded-full ${
                    item.risk === 'high' ? 'bg-red-500' :
                    item.risk === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                  }`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Distribuição por Fornecedor */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Distribuição por Fornecedor</h2>
            <TrendingUp className="w-5 h-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            {supplierData.map((supplier, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div 
                    className="w-4 h-4 rounded-full" 
                    style={{ backgroundColor: supplier.color }}
                  ></div>
                  <span className="font-medium text-gray-900">{supplier.name}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div 
                      className="h-2 rounded-full" 
                      style={{ 
                        width: `${supplier.value}%`, 
                        backgroundColor: supplier.color 
                      }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-gray-600 w-8">{supplier.value}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Uso vs Comprado */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Uso vs. Comprado por Categoria</h2>
          <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
            Ver detalhes →
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { category: 'Produtividade', purchased: 850, used: 742, color: 'blue' },
            { category: 'Infraestrutura', purchased: 432, used: 398, color: 'green' },
            { category: 'Desenvolvimento', purchased: 286, used: 234, color: 'purple' },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <h3 className="font-medium text-gray-900 mb-3">{item.category}</h3>
              <div className="relative h-32 mx-auto w-32">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="10"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke={`${item.color === 'blue' ? '#3b82f6' : item.color === 'green' ? '#10b981' : '#8b5cf6'}`}
                    strokeWidth="10"
                    strokeDasharray={`${(item.used / item.purchased) * 283} 283`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold text-gray-900">
                    {Math.round((item.used / item.purchased) * 100)}%
                  </span>
                </div>
              </div>
              <div className="mt-3 space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Em uso:</span>
                  <span className="font-medium">{item.used}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Compradas:</span>
                  <span className="font-medium">{item.purchased}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;