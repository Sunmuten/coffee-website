const { Coffee, Package, ShoppingCart, Building2, TrendingUp, Users, Phone, Mail } = lucide;

function CoffeeWebsite() {
  const [activeSection, setActiveSection] = React.useState('home');

  const products = [
    {
      id: 1,
      brand: 'MEVSO',
      name: '榛果風味三合一即溶咖啡',
      flavor: '榛果',
      description: '來自馬來西亞的經典風味，香濃榛果與咖啡的完美結合',
      image: './images/888-hazelnut.jpg' // Replace with your image
    },
    {
      id: 2,
      brand: '888',
      name: '榴槤風味三合一即溶咖啡',
      flavor: '榴槤',
      description: '獨特東南亞風情，榴槤香氣與咖啡的創新搭配',
      image: './images/888-durian-1.jpg' // Replace with your image
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      {/* Header */}
      <header className="bg-amber-900 text-white py-6 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Coffee size={40} />
            <h1 className="text-3xl font-bold">馬來西亞精品咖啡</h1>
          </div>
          <p className="text-center text-amber-100">888 & MEVSO 品牌台灣總代理</p>
          
          {/* Navigation */}
          <nav className="mt-6 flex justify-center gap-6">
            <button 
              onClick={() => setActiveSection('home')}
              className={`px-4 py-2 rounded-lg transition-all ${activeSection === 'home' ? 'bg-amber-700 font-bold' : 'hover:bg-amber-800'}`}
            >
              一般消費者
            </button>
            <button 
              onClick={() => setActiveSection('b2b')}
              className={`px-4 py-2 rounded-lg transition-all ${activeSection === 'b2b' ? 'bg-amber-700 font-bold' : 'hover:bg-amber-800'}`}
            >
              企業合作
            </button>
          </nav>
        </div>
      </header>

      {activeSection === 'home' ? (
        // B2C Content
        <div>
      {/* Hero Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-amber-900 mb-4">
            品味東南亞咖啡文化
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            精選馬來西亞優質咖啡品牌，為您帶來獨特的三合一即溶咖啡體驗
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center text-amber-900 mb-10">
            <Package className="inline-block mr-2 mb-1" size={32} />
            我們的產品
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {products.map((product) => (
              <div 
                key={product.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-6">
                  <div className="mb-3">
                    <span className="inline-block bg-amber-600 text-white px-3 py-1 rounded-full font-bold text-sm">
                      {product.brand}
                    </span>
                  </div>
                  <h5 className="text-xl font-bold text-amber-900 mb-2">
                    {product.name}
                  </h5>
                  <p className="text-gray-600 mb-4">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="inline-block bg-amber-100 text-amber-800 px-4 py-2 rounded-full font-semibold">
                      {product.flavor}風味
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Purchase Section */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto text-center max-w-2xl">
          <ShoppingCart className="mx-auto mb-4 text-amber-900" size={48} />
          <h3 className="text-3xl font-bold text-amber-900 mb-6">
            立即選購
          </h3>
          <p className="text-gray-700 mb-8 text-lg">
            我們的產品現已在各大電商平台上架
          </p>
          
          <div className="space-y-4">
            <a 
              href="https://www.momoshop.com.tw" 
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gradient-to-r from-pink-500 to-purple-600 text-white py-4 px-8 rounded-lg font-bold text-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              momo購物網
            </a>
            
            <p className="text-gray-500 text-sm pt-4">
              更多銷售平台即將推出
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 px-4 bg-amber-50">
        <div className="container mx-auto max-w-3xl">
          <h3 className="text-3xl font-bold text-center text-amber-900 mb-8">
            關於我們
          </h3>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <p className="text-gray-700 leading-relaxed mb-4">
              我們專注於引進優質的馬來西亞咖啡品牌，為台灣消費者帶來道地的東南亞咖啡風味。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              目前代理的品牌包括 <span className="font-bold text-amber-900">888</span> 及 <span className="font-bold text-amber-900">MEVSO</span>，
              推出榛果和榴槤兩種獨特風味的三合一即溶咖啡。
            </p>
            <p className="text-gray-700 leading-relaxed">
              無論是喜愛經典榛果香氣，還是想嘗試創新的榴槤風味，我們都能滿足您的味蕾！
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">© 2025 馬來西亞精品咖啡 | 台灣</p>
          <p className="text-amber-200 text-sm">888 & MEVSO 品牌授權代理</p>
        </div>
      </footer>
        </div>
      ) : (
        // B2B Content
        <div>
          {/* B2B Hero */}
          <section className="py-12 px-4">
            <div className="container mx-auto text-center">
              <Building2 className="mx-auto mb-4 text-amber-900" size={64} />
              <h2 className="text-4xl font-bold text-amber-900 mb-4">
                企業合作方案
              </h2>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                誠摯邀請企業夥伴加入我們，共同開拓台灣優質咖啡市場
              </p>
            </div>
          </section>

          {/* B2B Benefits */}
          <section className="py-12 px-4">
            <div className="container mx-auto max-w-5xl">
              <h3 className="text-3xl font-bold text-center text-amber-900 mb-10">
                合作優勢
              </h3>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition-shadow">
                  <TrendingUp className="mx-auto mb-4 text-amber-600" size={48} />
                  <h4 className="text-xl font-bold text-amber-900 mb-3">獨特市場定位</h4>
                  <p className="text-gray-600">
                    榛果與榴槤風味在台灣市場具有差異化優勢，吸引追求新奇體驗的消費者
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition-shadow">
                  <Package className="mx-auto mb-4 text-amber-600" size={48} />
                  <h4 className="text-xl font-bold text-amber-900 mb-3">彈性供貨方案</h4>
                  <p className="text-gray-600">
                    提供批發優惠價格，支援小量起訂，適合各種規模的商業夥伴
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition-shadow">
                  <Users className="mx-auto mb-4 text-amber-600" size={48} />
                  <h4 className="text-xl font-bold text-amber-900 mb-3">行銷支援</h4>
                  <p className="text-gray-600">
                    提供產品資料、行銷素材，協助合作夥伴快速推廣市場
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Target Partners */}
          <section className="py-12 px-4 bg-white">
            <div className="container mx-auto max-w-4xl">
              <h3 className="text-3xl font-bold text-center text-amber-900 mb-10">
                適合合作對象
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border-l-4 border-amber-600 bg-amber-50 p-6 rounded-r-lg">
                  <h4 className="text-lg font-bold text-amber-900 mb-2">☕ 咖啡廳 / 餐飲業</h4>
                  <p className="text-gray-700">為您的客人提供獨特的咖啡選擇，提升店內產品差異化</p>
                </div>

                <div className="border-l-4 border-amber-600 bg-amber-50 p-6 rounded-r-lg">
                  <h4 className="text-lg font-bold text-amber-900 mb-2">🏪 零售通路商</h4>
                  <p className="text-gray-700">引進新興品牌，豐富商品組合，吸引追求新鮮感的消費者</p>
                </div>

                <div className="border-l-4 border-amber-600 bg-amber-50 p-6 rounded-r-lg">
                  <h4 className="text-lg font-bold text-amber-900 mb-2">🏢 企業福委會</h4>
                  <p className="text-gray-700">員工福利、節慶禮品的優質選擇，展現企業對員工的用心</p>
                </div>

                <div className="border-l-4 border-amber-600 bg-amber-50 p-6 rounded-r-lg">
                  <h4 className="text-lg font-bold text-amber-900 mb-2">🛒 電商平台</h4>
                  <p className="text-gray-700">擴充產品線，搭上東南亞風味熱潮，提升平台競爭力</p>
                </div>
              </div>
            </div>
          </section>

          {/* Products for B2B */}
          <section className="py-12 px-4">
            <div className="container mx-auto">
              <h3 className="text-3xl font-bold text-center text-amber-900 mb-10">
                供應產品
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {products.map((product) => (
                  <div 
                    key={product.id}
                    className="bg-white rounded-xl shadow-lg overflow-hidden"
                  >
                    <div className="bg-gradient-to-br from-amber-600 to-orange-600 p-2">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-64 object-cover rounded-t-lg"
                      />
                    </div>
                    
                    <div className="p-6">
                      <div className="mb-3">
                        <span className="inline-block bg-amber-600 text-white px-3 py-1 rounded-full font-bold text-sm">
                          {product.brand}
                        </span>
                      </div>
                      <h5 className="text-xl font-bold text-amber-900 mb-2">
                        {product.name}
                      </h5>
                      <p className="text-gray-600 mb-4">
                        {product.description}
                      </p>
                      <div className="bg-amber-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-700">
                          <span className="font-bold">規格：</span>三合一即溶咖啡<br/>
                          <span className="font-bold">包裝：</span>支援客製化包裝服務
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Form */}
          <section className="py-12 px-4 bg-gradient-to-br from-amber-100 to-orange-100">
            <div className="container mx-auto max-w-2xl">
              <h3 className="text-3xl font-bold text-center text-amber-900 mb-8">
                聯繫我們
              </h3>
              
              <div className="bg-white rounded-xl shadow-2xl p-8">
                <p className="text-center text-gray-700 mb-8 text-lg">
                  歡迎企業夥伴與我們聯繫，我們將盡快為您安排專人服務
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 bg-amber-50 rounded-lg">
                    <Phone className="text-amber-600 mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h4 className="font-bold text-amber-900 mb-1">電話洽詢</h4>
                      <p className="text-gray-700">請來電洽詢批發合作事宜</p>
                      <p className="text-amber-900 font-semibold mt-1">[您的聯絡電話]</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-amber-50 rounded-lg">
                    <Mail className="text-amber-600 mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h4 className="font-bold text-amber-900 mb-1">電子郵件</h4>
                      <p className="text-gray-700">來信說明您的需求，我們將儘速回覆</p>
                      <p className="text-amber-900 font-semibold mt-1">[您的電子郵件]</p>
                    </div>
                  </div>

                  <div className="text-center pt-4">
                    <p className="text-gray-600 text-sm">
                      營業時間：週一至週五 9:00-18:00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-amber-900 text-white py-8">
            <div className="container mx-auto px-4 text-center">
              <p className="mb-2">© 2025 馬來西亞精品咖啡 | 台灣</p>
              <p className="text-amber-200 text-sm">888 & MEVSO 品牌授權代理</p>
            </div>
          </footer>
        </div>
      )}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CoffeeWebsite />);
