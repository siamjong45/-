function calculateZakat() {
    let cash = parseFloat(document.getElementById('cash').value) || 0;
    let bank = parseFloat(document.getElementById('bank').value) || 0;
    let gold = parseFloat(document.getElementById('gold').value) || 0;
    let silver = parseFloat(document.getElementById('silver').value) || 0;
    let investment = parseFloat(document.getElementById('investment').value) || 0;
    let other_assets = parseFloat(document.getElementById('other_assets').value) || 0;
    let debt = parseFloat(document.getElementById('debt').value) || 0;

    let goldValue = gold * 9500; // স্বর্ণের বাজার মূল্য (প্রতি গ্রাম ৯৫০০৳)
    let silverValue = silver * 130; // রূপার বাজার মূল্য (প্রতি গ্রাম ১৩০৳)

    let total_assets = cash + bank + goldValue + silverValue + investment + other_assets;
    let net_assets = total_assets - debt;

    let nisab = 85000; // ২০২৫ সালের জন্য নিসাব মাত্রা (স্বর্ণের হিসাবে)
    let zakat = net_assets >= nisab ? net_assets * 0.025 : 0;

    document.getElementById('result').innerText = zakat > 0 ? `আপনার যাকাত দিতে হবে: ${zakat.toFixed(2)}৳` : "আপনার যাকাত দেওয়ার প্রয়োজন নেই।";
}
