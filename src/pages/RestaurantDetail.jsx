{/* Previous code remains unchanged until the packages and vouchers section */}

      {/* 套餐和代金券 */}
      <div className="bg-white p-4 mt-2">
        <div className="grid grid-cols-2 gap-4">
          {/* 到店套餐 */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-bold mb-3">到店套餐</h3>
            <div className="space-y-3">
              {packages.map((pkg) => (
                <div key={pkg.id} className="bg-white p-2 rounded">
                  <img 
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-24 rounded object-cover mb-2"
                  />
                  <h4 className="text-sm font-medium">{pkg.name}</h4>
                  <div className="mt-1">
                    <span className="text-red-500 text-base font-bold">¥{pkg.price}</span>
                    <span className="text-gray-400 text-xs line-through ml-2">¥{pkg.originalPrice}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 超值代金券 */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-bold mb-3">超值代金券</h3>
            <div className="space-y-3">
              {vouchers.map((voucher) => (
                <div key={voucher.id} className="bg-white p-2 rounded">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="flex items-baseline">
                        <span className="text-red-500 text-lg font-bold">¥{voucher.price}</span>
                        <span className="text-gray-500 text-xs ml-1">代{voucher.value}</span>
                      </div>
                      <p className="text-gray-500 text-xs mt-1">{voucher.description}</p>
                    </div>
                    <button className="bg-red-500 text-white px-3 py-1 rounded text-sm">
                      抢购
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

{/* Rest of the code remains unchanged */}
