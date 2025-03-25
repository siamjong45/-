function showForm() {
    document.getElementById('title').style.display = 'none';
    document.getElementById('calculator').classList.remove('hidden');
}

function calculateZakat() {
    let cash = parseFloat(document.getElementById('cash').value) || 0;
    let bank = parseFloat(document.getElementById('bank').value) || 0;
    let gold = parseFloat(document.getElementById('gold').value) || 0;
    let silver = parseFloat(document.getElementById('silver').value) || 0;
    let investment = parseFloat(document.getElementById('investment').value) || 0;
    let other_assets = parseFloat(document.getElementById('other_assets').value) || 0;
    let debt = parseFloat(document.getElementById('debt').value) || 0;

    let gold_value = gold * 7000; // প্রতি গ্রাম স্বর্ণের মূল্য (উদাহরণস্বরূপ)
    let silver_value = silver * 100; // প্রতি গ্রাম রূপার মূল্য

    let total_assets = cash + bank + gold_value + silver_value + investment + other_assets;
    let net_assets = total_assets - debt;
    
    let zakat = net_assets >= 85000 ? (net_assets * 2.5) / 100 : 0;

    document.getElementById('result').innerHTML = `
        <p>মোট সম্পদ: ${total_assets.toFixed(2)}৳</p>
        <p>মোট দায়: ${debt.toFixed(2)}৳</p>
        <p>প্রযোজ্য যাকাত: ${zakat.toFixed(2)}৳</p>
    `;
}
