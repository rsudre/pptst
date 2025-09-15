import React from 'react';
import { 
  Shield, 
  AlertTriangle, 
  CheckCircle, 
  Clock,
  TrendingUp,
  FileText,
  Eye,
  Download
} from 'lucide-react';

const Compliance: React.FC = () => {
  const complianceMetrics = [
    {
      title: 'Conformidade Geral',
      value: '94.2%',
      status: 'good',
      trend: '+2.1%',
      icon: Shield
    },
    {
      title: 'Licenças em Risco',
      value: '23',
      status: 'warning',
      trend: '-3',
      icon: AlertTriangle
    },
    {
      title: 'Sublicenciamento',
      value: '3',
      status: 'critical',
      trend: '+1',
      icon: AlertTriangle
    },
    {
      title: 'Auditorias Pendentes',
      value: '7',
      status: 'warning',
      trend: '+2',
      icon: Clock
    }
  ];

  const riskAnalysis = [
    {
      supplier: 'Oracle',
      product: 'Oracle Database Enterprise Edition',
      riskLevel: 'Alto',
      issue: 'Sublicenciamento detectado',
      purchased: 10,
      used: 12,
      excessCost: '€9,500',
      action: 'Comprar 2 licenças adicionais',
      deadline: '2024-04-01'
    },
    {
      supplier: 'Microsoft',
      product: 'Visual Studio Professional',
      riskLevel: 'Médio',
      issue: 'Uso próximo do limite',
      purchased: 12,
      used: 11,
      excessCost: '€0',
      action: 'Monitorar crescimento',
      deadline: '2024-05-15'
    },
    {
      supplier: 'Red Hat',
      product: 'OpenShift Container Platform',
      riskLevel: 'Baixo',
      issue: 'Auditoria programada',
      purchased: 8,
      used: 6,
      excessCost: '€0',
      action: 'Preparar documentação',
      deadline: '2024-06-30'
    }
  ];

  const auditHistory = [
    {
      id: 1,
      supplier: 'Microsoft',
      date: '2023-11-15',
      auditor: 'KPMG',
      status: 'Compliant',
      findings: 0,
      recommendations: 2,
      nextAudit: '2024-11-15'
    },
    {
      id: 2,
      supplier: 'Oracle',
      date: '2023-08-22',
      auditor: 'PwC',
      status: 'Non-Compliant',
      findings: 3,
      recommendations: 5,
      nextAudit: '2024-02-22'
    },
    {
      id: 3,
      supplier: 'AWS',
      date: '2023-06-10',
      auditor: 'Deloitte',
      status: 'Compliant',
      findings: 1,
      recommendations: 1,
      nextAudit: '2024-06-10'
    }
  ];

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'Alto':
        return 'text-red-600 bg-red-50 border-red-200';
      case 'Médio':
        return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'Baixo':
        return 'text-green-600 bg-green-50 border-green-200';
      default:
        return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Compliant':
        return 'text-green-600 bg-green-50';
      case 'Non-Compliant':
        return 'text-red-600 bg-red-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Compliance e Riscos</h1>
          <p className="text-gray-600 mt-1">Monitor de conformidade e análise de riscos de licenciamento</p>
        </div>
        <div className="flex space-x-3">
          <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-2">
            <Download className="w-4 h-4" />
            <span>Relatório Compliance</span>
          </button>
        </div>
      </div>

      {/* Métricas de Compliance */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {complianceMetrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div className={`p-3 rounded-lg ${
                  metric.status === 'good' ? 'bg-green-100' :
                  metric.status === 'warning' ? 'bg-yellow-100' :
                  metric.status === 'critical' ? 'bg-red-100' : 'bg-gray-100'
                }`}>
                  <Icon className={`w-6 h-6 ${
                    metric.status === 'good' ? 'text-green-600' :
                    metric.status === 'warning' ? 'text-yellow-600' :
                    metric.status === 'critical' ? 'text-red-600' : 'text-gray-600'
                  }`} />
                </div>
                <span className={`text-sm font-medium ${
                  metric.trend.startsWith('+') && metric.status === 'good' ? 'text-green-600' :
                  metric.trend.startsWith('+') && metric.status !== 'good' ? 'text-red-600' :
                  'text-green-600'
                }`}>
                  {metric.trend}
                </span>
              </div>
              <div className="mt-4">
                <h3 className="text-2xl font-bold text-gray-900">{metric.value}</h3>
                <p className="text-gray-600 text-sm">{metric.title}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Análise de Riscos */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Análise de Riscos</h2>
          <TrendingUp className="w-5 h-5 text-gray-400" />
        </div>
        
        <div className="space-y-4">
          {riskAnalysis.map((risk, index) => (
            <div key={index} className={`p-4 rounded-lg border ${getRiskColor(risk.riskLevel)}`}>
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-medium text-gray-900">{risk.product}</h3>
                  <p className="text-sm text-gray-600">{risk.supplier}</p>
                </div>
                <span className={`px-3 py-1 text-xs font-medium rounded-full ${getRiskColor(risk.riskLevel)}`}>
                  Risco {risk.riskLevel}
                </span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-3">
                <div>
                  <p className="text-xs text-gray-500">Problema</p>
                  <p className="text-sm font-medium text-gray-900">{risk.issue}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Uso vs Compradas</p>
                  <p className="text-sm font-medium text-gray-900">{risk.used} / {risk.purchased}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Custo Excesso</p>
                  <p className={`text-sm font-medium ${risk.excessCost !== '€0' ? 'text-red-600' : 'text-green-600'}`}>
                    {risk.excessCost}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Prazo</p>
                  <p className="text-sm font-medium text-gray-900">
                    {new Date(risk.deadline).toLocaleDateString('pt-PT')}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-700">
                  <span className="font-medium">Ação recomendada:</span> {risk.action}
                </p>
                <button className="px-3 py-1 text-xs bg-white border border-gray-300 text-gray-700 rounded hover:bg-gray-50">
                  Resolver
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Histórico de Auditorias */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Histórico de Auditorias</h2>
            <FileText className="w-5 h-5 text-gray-400" />
          </div>
          
          <div className="space-y-4">
            {auditHistory.map((audit) => (
              <div key={audit.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-medium text-gray-900">{audit.supplier}</h3>
                    <p className="text-sm text-gray-500">
                      {new Date(audit.date).toLocaleDateString('pt-PT')} • {audit.auditor}
                    </p>
                  </div>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(audit.status)}`}>
                    {audit.status === 'Compliant' ? 'Conforme' : 'Não Conforme'}
                  </span>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500">Descobertas:</span>
                    <span className={`ml-2 font-medium ${audit.findings > 0 ? 'text-red-600' : 'text-green-600'}`}>
                      {audit.findings}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-500">Recomendações:</span>
                    <span className="ml-2 font-medium text-gray-900">{audit.recommendations}</span>
                  </div>
                </div>
                
                <div className="mt-3 pt-3 border-t border-gray-200 flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    Próxima: {new Date(audit.nextAudit).toLocaleDateString('pt-PT')}
                  </span>
                  <button className="text-blue-600 hover:text-blue-800 text-sm flex items-center space-x-1">
                    <Eye className="w-4 h-4" />
                    <span>Ver detalhes</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Próximas Ações */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Próximas Ações</h2>
            <Clock className="w-5 h-5 text-gray-400" />
          </div>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-3 p-3 bg-red-50 rounded-lg border border-red-200">
              <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-red-800">Resolver Sublicenciamento</p>
                <p className="text-sm text-red-600">Oracle Database - Prazo: 01/04/2024</p>
                <p className="text-xs text-red-500 mt-1">Custo estimado: €9,500</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
              <Clock className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-yellow-800">Preparar Auditoria</p>
                <p className="text-sm text-yellow-600">Red Hat - Prazo: 30/06/2024</p>
                <p className="text-xs text-yellow-500 mt-1">Documentação pendente</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
              <FileText className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-blue-800">Renovar Contrato</p>
                <p className="text-sm text-blue-600">AWS Support - Prazo: 01/06/2024</p>
                <p className="text-xs text-blue-500 mt-1">Negociar termos</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg border border-green-200">
              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-green-800">Otimizar Licenças</p>
                <p className="text-sm text-green-600">Microsoft 365 - Oportunidade</p>
                <p className="text-xs text-green-500 mt-1">Economia potencial: €3,200</p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-4 h-4 text-gray-500" />
              <span className="text-sm font-medium text-gray-700">Tendência de Compliance</span>
            </div>
            <p className="text-sm text-gray-600 mt-1">
              Conformidade geral aumentou 2.1% no último trimestre. Continue monitorizando 
              as licenças Oracle para manter a tendência positiva.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compliance;