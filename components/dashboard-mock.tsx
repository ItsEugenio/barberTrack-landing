export const DashboardMock = () => {
  return (
    <div className="w-full h-full bg-gray-900 rounded-lg overflow-hidden">
      {/* Header del Dashboard */}
      <div className="bg-gray-800 p-4 border-b border-gray-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>
            <h1 className="text-white font-semibold">BarberTrack Admin</h1>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Contenido Principal */}
      <div className="p-6 space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-4 gap-4">
          {[
            { label: "Citas Hoy", value: "24", color: "bg-blue-500" },
            { label: "Ingresos", value: "$1,250", color: "bg-green-500" },
            { label: "Clientes", value: "156", color: "bg-purple-500" },
            { label: "Barberos", value: "8", color: "bg-orange-500" },
          ].map((stat, i) => (
            <div key={i} className="bg-gray-800 p-3 rounded-lg">
              <div className={`w-3 h-3 ${stat.color} rounded-full mb-2`}></div>
              <div className="text-white text-sm font-semibold">{stat.value}</div>
              <div className="text-gray-400 text-xs">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Chart Area */}
        <div className="bg-gray-800 p-4 rounded-lg">
          <div className="text-white text-sm font-semibold mb-3">Análisis de Citas</div>
          <div className="h-20 bg-gray-700 rounded relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-full h-full flex items-end space-x-1 p-2">
              {[40, 65, 45, 80, 55, 70, 85, 60, 75, 90, 65, 50].map((height, i) => (
                <div key={i} className="bg-blue-500 rounded-t flex-1" style={{ height: `${height}%` }}></div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-gray-800 p-4 rounded-lg">
          <div className="text-white text-sm font-semibold mb-3">Actividad Reciente</div>
          <div className="space-y-2">
            {["Nueva cita - Carlos M.", "Pago recibido - $45", "Cliente registrado", "Cita completada"].map(
              (activity, i) => (
                <div key={i} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <div className="text-gray-300 text-xs">{activity}</div>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
