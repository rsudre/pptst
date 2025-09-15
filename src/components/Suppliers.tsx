import React, { useState } from 'react';
import { 
  Building2, 
  Plus, 
  Search, 
  Edit, 
  Trash2, 
  Globe,
  Phone,
  Mail,
  User,
  Package
} from 'lucide-react';

const Suppliers: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const suppliers = [
    {
      id: 1,
      name: 'Microsoft',
      logo: '🏢',
      products: ['Microsoft 365', 'Azure', 'Windows Server', 'Visual Studio'],
      contractType: 'Subscrição / Perpétua',
      accountManager: 'Sarah Johnson',
      email: 'sarah.johnson@microsoft.com',
      phone: '+1 (425) 882-8080',
      website: 'microsoft.com',
      totalLicenses: 312,
      totalCost: '€285,450',
      status: 'active'
    },
    {
      id: 2,
      name: 'Oracle',
      logo: '🔴',
      products: ['Oracle Database', 'Java', 'WebLogic Server', 'MySQL'],
      contractType: 'Perpétua / Subscrição',
      accountManager: 'Mark Thompson',
      email: 'mark.thompson@oracle.com',
      phone: '+1 (650) 506-7000',
      website: 'oracle.com',
      totalLicenses: 45,
      totalCost: '€187,500',
      status: 'active'
    },
    {
      id: 3,
      name: 'Red Hat',
      logo: '🎩',
      products: ['Red Hat Enterprise Linux', 'OpenShift', 'Ansible', 'Satellite'],
      contractType: 'Subscrição',
      accountManager: 'Carlos Rodriguez',
      email: 'carlos.rodriguez@redhat.com',
      phone: '+1 (919) 754-3700',
      website: 'redhat.com',
      totalLicenses: 67,
      totalCost: '€45,200',
      status: 'active'
    },
    {
      id: 4,
      name: 'Amazon Web Services',
      logo: '☁️',
      products: ['EC2', 'S3', 'RDS', 'Lambda', 'Support'],
      contractType: 'Pay-as-you-go',
      accountManager: 'Jennifer Lee',
      email: 'jennifer.lee@amazon.com',
      phone: '+1 (206) 266-1000',
      website: 'aws.amazon.com',
      totalLicenses: 1,
      totalCost: '€78,340',
      status: 'active'
    }
  ];

  const filteredSuppliers = suppliers.filter(supplier =>
    supplier.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const SupplierModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl mx-4">
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Novo Fornecedor</h2>
          <button 
            onClick={() => setIsModalOpen(false)}
            className="text-gray-400 hover:text-gray-600"
          >
            ✕
          </button>
        </div>
        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nome do Fornecedor
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Ex: Microsoft"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Website
              </label>
              <input
                type="url"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Ex: microsoft.com"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Produtos Suportados
            </label>
            <textarea
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              rows={3}
              placeholder="Liste os produtos separados por vírgula"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tipo de Contrato
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
              <option>Subscrição</option>
              <option>Perpétua</option>
              <option>Pay-as-you-go</option>
              <option>Subscrição / Perpétua</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Account Manager
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Nome do contacto"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="email@fornecedor.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Telefone
            </label>
            <input
              type="tel"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="+351 XXX XXX XXX"
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
            Guardar Fornecedor
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Cadastro de Fornecedores</h1>
          <p className="text-gray-600 mt-1">Gerencie seus fornecedores de software e licenças</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
        >
          <Plus className="w-4 h-4" />
          <span>Novo Fornecedor</span>
        </button>
      </div>

      {/* Pesquisa */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Pesquisar fornecedores..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Grid de Fornecedores */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSuppliers.map((supplier) => (
          <div key={supplier.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="text-2xl">{supplier.logo}</div>
                <div>
                  <h3 className="font-semibold text-gray-900">{supplier.name}</h3>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    {supplier.status === 'active' ? 'Ativo' : 'Inativo'}
                  </span>
                </div>
              </div>
              <div className="flex space-x-1">
                <button className="p-2 text-gray-400 hover:text-blue-600">
                  <Edit className="w-4 h-4" />
                </button>
                <button className="p-2 text-gray-400 hover:text-red-600">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center text-sm text-gray-600">
                <Package className="w-4 h-4 mr-2" />
                <span>{supplier.products.length} produtos</span>
              </div>
              
              <div className="flex items-center text-sm text-gray-600">
                <Building2 className="w-4 h-4 mr-2" />
                <span>{supplier.contractType}</span>
              </div>

              <div className="flex items-center text-sm text-gray-600">
                <User className="w-4 h-4 mr-2" />
                <span>{supplier.accountManager}</span>
              </div>

              <div className="flex items-center text-sm text-gray-600">
                <Mail className="w-4 h-4 mr-2" />
                <span className="truncate">{supplier.email}</span>
              </div>

              <div className="flex items-center text-sm text-gray-600">
                <Phone className="w-4 h-4 mr-2" />
                <span>{supplier.phone}</span>
              </div>

              <div className="flex items-center text-sm text-gray-600">
                <Globe className="w-4 h-4 mr-2" />
                <span>{supplier.website}</span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-gray-500">Total Licenças</p>
                  <p className="font-semibold text-gray-900">{supplier.totalLicenses}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Custo Total</p>
                  <p className="font-semibold text-gray-900">{supplier.totalCost}</p>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-xs text-gray-500 mb-2">Produtos:</p>
              <div className="flex flex-wrap gap-1">
                {supplier.products.slice(0, 3).map((product, index) => (
                  <span 
                    key={index}
                    className="inline-flex items-center px-2 py-1 rounded text-xs bg-gray-100 text-gray-700"
                  >
                    {product}
                  </span>
                ))}
                {supplier.products.length > 3 && (
                  <span className="inline-flex items-center px-2 py-1 rounded text-xs bg-gray-100 text-gray-700">
                    +{supplier.products.length - 3}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && <SupplierModal />}
    </div>
  );
};

export default Suppliers;