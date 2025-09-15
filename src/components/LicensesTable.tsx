import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  Download, 
  Edit, 
  RotateCcw, 
  AlertTriangle,
  CheckCircle,
  Clock,
  MoreHorizontal
} from 'lucide-react';

const LicensesTable: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterSupplier, setFilterSupplier] = useState('');

  const licenses = [
    {
      id: 1,
      supplier: 'Microsoft',
      product: 'Microsoft 365 Business Premium',
      type: 'Subscrição Anual',
      purchased: 150,
      used: 142,
      free: 8,
      purchaseDate: '2024-01-15',
      expirationDate: '2024-12-31',
      cost: '€2,250',
      responsible: 'João Silva',
      compliance: 95,
      risk: 'Baixo',
      nextAudit: '2024-06-15',
      status: 'active'
    },
    {
      id: 2,
      supplier: 'Oracle',
      product: 'Oracle Database Enterprise Edition',
      type: 'Licença Perpétua',
      purchased: 10,
      used: 12,
      free: -2,
      purchaseDate: '2023-03-10',
      expirationDate: '2024-03-10',
      cost: '€47,500',
      responsible: 'Maria Santos',
      compliance: 78,
      risk: 'Alto',
      nextAudit: '2024-04-01',
      status: 'warning'
    },
    {
      id: 3,
      supplier: 'Red Hat',
      product: 'Red Hat Enterprise Linux Server',
      type: 'Subscrição Anual',
      purchased: 25,
      used: 23,
      free: 2,
      purchaseDate: '2023-11-20',
      expirationDate: '2024-11-20',
      cost: '€8,750',
      responsible: 'Pedro Costa',
      compliance: 92,
      risk: 'Baixo',
      nextAudit: '2024-08-15',
      status: 'active'
    },
    {
      id: 4,
      supplier: 'AWS',
      product: 'AWS Support Business',
      type: 'Pay-as-you-go',
      purchased: 1,
      used: 1,
      free: 0,
      purchaseDate: '2023-06-01',
      expirationDate: '2024-06-01',
      cost: '€12,340',
      responsible: 'Ana Ferreira',
      compliance: 100,
      risk: 'Baixo',
      nextAudit: '2024-09-01',
      status: 'expiring'
    },
    {
      id: 5,
      supplier: 'Microsoft',
      product: 'Visual Studio Professional',
      type: 'Subscrição Anual',
      purchased: 12,
      used: 8,
      free: 4,
      purchaseDate: '2024-02-01',
      expirationDate: '2025-01-31',
      cost: '€6,588',
      responsible: 'Carlos Oliveira',
      compliance: 85,
      risk: 'Médio',
      nextAudit: '2024-07-15',
      status: 'active'
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'warning':
        return <AlertTriangle className="w-4 h-4 text-yellow-500" />;
      case 'expiring':
        return <Clock className="w-4 h-4 text-orange-500" />;
      default:
        return <CheckCircle className="w-4 h-4 text-green-500" />;
    }
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'Alto':
        return 'text-red-600 bg-red-50';
      case 'Médio':
        return 'text-yellow-600 bg-yellow-50';
      case 'Baixo':
        return 'text-green-600 bg-green-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  const filteredLicenses = licenses.filter(license => {
    const matchesSearch = license.product.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         license.supplier.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSupplier = filterSupplier === '' || license.supplier === filterSupplier;
    return matchesSearch && matchesSupplier;
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Licenças e Subscrições</h1>
          <p className="text-gray-600 mt-1">Gerencie todas as suas licenças e subscrições</p>
        </div>
        <div className="flex space-x-3">
          <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-2">
            <Download className="w-4 h-4" />
            <span>Exportar</span>
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            + Nova Licença
          </button>
        </div>
      </div>

      {/* Filtros */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Pesquisar por produto ou fornecedor..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <select
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={filterSupplier}
            onChange={(e) => setFilterSupplier(e.target.value)}
          >
            <option value="">Todos os fornecedores</option>
            <option value="Microsoft">Microsoft</option>
            <option value="Oracle">Oracle</option>
            <option value="Red Hat">Red Hat</option>
            <option value="AWS">AWS</option>
          </select>
          <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2">
            <Filter className="w-4 h-4" />
            <span>Mais Filtros</span>
          </button>
        </div>
      </div>

      {/* Tabela */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-100 border-b border-gray-300">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Fornecedor / Produto
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Tipo
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Licenças
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Custo
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Expiração
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Compliance
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Risco
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Responsável
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {filteredLicenses.map((license) => (
                <tr key={license.id} className="hover:bg-gray-50 border-b border-gray-100">
                  <td className="px-4 py-4 whitespace-nowrap">
                    {getStatusBadge(license.status)}
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-6 w-6 mr-3">
                        <div className="h-6 w-6 rounded bg-blue-100 flex items-center justify-center">
                          <span className="text-xs font-bold text-blue-700">
                            {license.supplier.charAt(0)}
                          </span>
                        </div>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-900">{license.product}</div>
                        <div className="text-sm text-gray-500">{license.supplier}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                    {license.type}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      <span className="font-bold">{license.used} / {license.purchased}</span>
                    </div>
                    <div className="text-xs text-blue-500">
                      {license.free >= 0 ? `${license.free} livres` : `${Math.abs(license.free)} excesso`}
                    </div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm font-bold text-gray-900">
                    {license.cost}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                    {new Date(license.expirationDate).toLocaleDateString('pt-PT')}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                        <div 
                          className={`h-2 rounded-full ${
                            license.compliance >= 90 ? 'bg-green-500' :
                            license.compliance >= 80 ? 'bg-yellow-500' : 'bg-red-500'
                          }`}
                          style={{ width: `${license.compliance}%` }}
                        ></div>
                      </div>
                      <span className="text-xs font-medium text-gray-900">{license.compliance}%</span>
                    </div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getRiskColor(license.risk)}`}>
                      {license.risk}
                    </span>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                    {license.responsible}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center space-x-2">
                      <button className="text-blue-500 hover:text-blue-700 p-1">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="text-red-500 hover:text-red-700 p-1">
                        <RotateCcw className="w-4 h-4" />
                      </button>
                      <button className="text-gray-500 hover:text-gray-700 p-1">
                        <MoreHorizontal className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LicensesTable;