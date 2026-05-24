import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Target, Heart, Bike, ShowerHead, Coffee, ShieldCheck, MapPin, Radio, Activity, Globe, Download, Landmark, CreditCard, ArrowUpRight } from 'lucide-react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

export default function SovereignEmpire() {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [adSpend, setAdSpend] = useState(450000);
  const [agentMsg, setAgentMsg] = useState("Securing Sovereign Nodes...");
  const [payoutAmount, setPayoutAmount] = useState(0);
  const [payoutHistory, setPayoutHistory] = useState([]);

  // --- LOGIC ENGINE ---
  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const monthlyRevenue = labels.map((_, i) => 2500000 * Math.pow(1 + (0.45 * (1 + adSpend/1000000)) / 12, i));
  const monthlyProfit = monthlyRevenue.map(rev => rev - (rev * 0.08) - adSpend);
  const totalAnnualProfit = monthlyProfit.reduce((a, b) => a + b, 0);
  const foundationFund = totalAnnualProfit * 0.10;
  
  const showerUnits = Math.floor(foundationFund / 15000);
  const meals = Math.floor((foundationFund * 0.2) / 5);
  const blankets = Math.floor((foundationFund * 0.1) / 10);

  const handlePayout = () => {
    if (payoutAmount > 0) {
      const newPayout = { id: Date.now(), amount: payoutAmount, date: new Date().toLocaleDateString() };
      setPayoutHistory([newPayout, ...payoutHistory]);
      setPayoutAmount(0);
      alert("Sovereign Payout Initiated to Foundation Vault");
    }
  };

  const chartData = {
    labels,
    datasets: [
      { label: 'Revenue', data: monthlyRevenue, borderColor: '#FFD700', backgroundColor: 'rgba(255, 215, 0, 0.05)', fill: true, tension: 0.4 },
      { label: 'Dignity', data: monthlyProfit.map(p => p * 0.1), borderColor: '#EC4899', backgroundColor: 'rgba(236, 72, 153, 0.1)', fill: true, tension: 0.4 }
    ]
  };

  // --- SECURITY GATE ---
  if (!isAuthorized) {
    return (
      <div className="bg-black min-h-screen flex items-center justify-center text-white font-sans">
        <div className="text-center p-10 border border-pink-500/20 rounded-3xl bg-gray-900/40 shadow-2xl">
          <Heart className="text-pink-600 animate-pulse mx-auto mb-6" size={50} />
          <h2 className="text-xs font-black tracking-[0.4em] text-pink-500 mb-6">SOVEREIGN ACCESS REQUIRED</h2>
          <input 
            type="password" 
            placeholder="ENTER SECRET KEY"
            className="bg-black border border-gray-800 p-4 rounded-xl text-center font-mono tracking-widest outline-none focus:border-pink-500 transition-all"
            onChange={(e) => { if(e.target.value.toUpperCase() === "MAHEPA2026") setIsAuthorized(true) }} 
          />
        </div>
      </div>
    );
  }

  // --- MAIN DASHBOARD ---
  return (
    <div className="bg-[#050505] min-h-screen p-4 md:p-8 text-white font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <header className="flex justify-between items-center mb-8 border-b border-white/5 pb-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-pink-600 rounded-full shadow-[0_0_40px_rgba(236,72,153,0.3)]"><Heart size={24} /></div>
            <div>
              <h1 className="text-2xl font-black italic tracking-tighter uppercase">MahepaVibes Sovereign</h1>
              <p className="text-[10px] font-bold text-pink-500 tracking-[0.3em]">Empire Logic & Foundation Vault</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-2xl">
            <Radio size={14} className="text-green-500 animate-ping" />
            <span className="text-[10px] font-black uppercase tracking-widest opacity-70">{agentMsg}</span>
          </div>
        </header>

        {/* Foundation & Payout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-gradient-to-br from-pink-900/40 to-transparent border border-pink-500/20 p-6 rounded-2xl shadow-xl">
            <p className="text-[10px] uppercase opacity-50 font-bold mb-1">MahepaVibes Fund</p>
            <p className="text-3xl font-black text-pink-500">${Math.round(foundationFund).toLocaleString()}</p>
          </div>
          
          {/* Custom Sovereign Payout System */}
          <div className="lg:col-span-2 bg-white/5 border border-white/10 p-6 rounded-2xl shadow-xl flex items-center gap-6">
            <div className="flex-1">
              <p className="text-[10px] uppercase opacity-50 font-bold mb-2 flex items-center gap-2"><CreditCard size={12}/> Sovereign Payout Engine</p>
              <input 
                type="number" 
                value={payoutAmount} 
                onChange={(e) => setPayoutAmount(e.target.value)}
                placeholder="Enter Payout Amount"
                className="bg-black/50 border border-white/10 p-2 rounded w-full text-xl font-bold outline-none"
              />
            </div>
            <button 
              onClick={handlePayout}
              className="bg-white text-black p-4 rounded-xl font-black text-xs uppercase hover:bg-pink-500 hover:text-white transition-all flex items-center gap-2"
            >
              Process Payout <ArrowUpRight size={16}/>
            </button>
          </div>

          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl shadow-xl">
            <p className="text-[10px] uppercase opacity-50 font-bold mb-1">Grid Status</p>
            <p className="text-3xl font-black text-green-500 uppercase tracking-tighter">Verified</p>
          </div>
        </div>

        {/* Dignity Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 text-center">
          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
            <ShowerHead className="mx-auto mb-2 text-blue-400" />
            <p className="text-2xl font-black">{showerUnits.toLocaleString()}</p>
            <p className="text-[10px] uppercase opacity-40 font-bold tracking-widest">Power Showers</p>
          </div>
          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
            <Coffee className="mx-auto mb-2 text-orange-400" />
            <p className="text-2xl font-black">{meals.toLocaleString()}</p>
            <p className="text-[10px] uppercase opacity-40 font-bold tracking-widest">Hot Meals</p>
          </div>
          <div className={`${darkMode ? 'bg-black' : 'bg-gray-50'} border border-white/10 p-6 rounded-2xl`}>
            <ShieldCheck className="mx-auto mb-2 text-cyan-400" />
            <p className="text-2xl font-black">{blankets.toLocaleString()}</p>
            <p className="text-[10px] uppercase opacity-40 font-bold tracking-widest">Thermal Blankets</p>
          </div>
        </div>

        {/* Main Chart & Ads */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white/5 border border-white/10 p-8 rounded-3xl">
            <div className="flex justify-between items-center mb-6">
               <h3 className="font-black italic flex items-center gap-2 uppercase tracking-tighter text-yellow-500"><Target size={18}/> Empire Trajectory</h3>
            </div>
            <div className="h-[300px]"><Line data={chartData} options={{ maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { y: { display: false }, x: { grid: { display: false }, ticks: { color: '#333' } } } }} /></div>
          </div>
          
          <div className="bg-white/5 border border-white/10 p-6 rounded-3xl flex flex-col justify-between">
            <div>
              <label className="text-[10px] uppercase font-bold text-yellow-500 block mb-4 italic tracking-widest">Global Ad Velocity</label>
              <input type="range" min="0" max="5000000" step="50000" value={adSpend} onChange={(e) => setAdSpend(Number(e.target.value))} className="w-full accent-yellow-500" />
            </div>
            <div className="mt-6 border-t border-white/10 pt-6">
               <p className="text-[10px] font-black text-pink-500 uppercase mb-2 italic tracking-widest">Payout History</p>
               <div className="max-h-[100px] overflow-y-auto text-[10px] font-mono opacity-60">
                 {payoutHistory.length === 0 ? "No active payouts" : payoutHistory.map(p => (
                   <div key={p.id} className="flex justify-between border-b border-white/5 py-1">
                     <span>{p.date}</span>
                     <span className="text-green-500">+${p.amount}</span>
                   </div>
                 ))}
               </div>
            </div>
            <button onClick={() => window.print()} className="mt-6 w-full py-4 bg-pink-600 text-white font-black rounded-xl uppercase italic text-xs tracking-widest shadow-lg">Download Ledger</button>
          </div>
        </div>

      </div>
    </div>
  );
}

// Support Icons Mockup
const Radio = ({size, className}) => <Activity size={size} className={className} />;
const darkMode = true;
