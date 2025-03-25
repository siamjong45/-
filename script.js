function showForm() {
    document.getElementById("zakatFormContainer").style.display = "block";
    document.getElementById("title").style.display = "none";
}

function calculateZakat() {
    let cash = parseFloat(document.getElementById("cash").value) || 0;
    let bank = parseFloat(document.getElementById("bank").value) || 0;
    let gold = parseFloat(document.getElementById("gold").value) || 0;
    let silver = parseFloat(document.getElementById("silver").value) || 0;
    let investment = parseFloat(document.getElementById("investment").value) || 0;
    let other_assets = parseFloat(document.getElementById("other_assets").value) || 0;
    let debt = parseFloat(document.getElementById("debt").value) || 0;

    // স্বর্ণ ও রৌপ্যের বাজার দর (আপডেট করতে পারো)
    let goldRate = 9000; // ১ গ্রাম স্বর্ণের মূল্য (৳)
    let silverRate = 150; // ১ গ্রাম রূপার মূল্য (৳)

    // মোট সম্পদের হিসাব
    let totalAssets = (gold * goldRate) + (silver * silverRate) + cash + bank + investment + other_assets;
    
    // নিসাবের পরিমাণ (৮৭.৪৮ গ্রাম স্বর্ণ বা ৬১২.৩৬ গ্রাম রূপা)
    let nisab = 612.36 * silverRate;

    // ঋণ বাদ দিয়ে নিট সম্পদ
    let netAssets = totalAssets - debt;

    // যাকাতের পরিমাণ (নিসাবের উপরে হলে ২.৫%)
    let zakatAmount = netAssets >= nisab ? netAssets * 0.025 : 0;

    // ফলাফল দেখানো
    document.getElementById("totalAssets").innerText = `মোট সম্পদ: ${totalAssets.toFixed(2)} টাকা`;
    document.getElementById("totalDebt").innerText = `মোট দায়: ${debt.toFixed(2)} টাকা`;
    document.getElementById("zakatAmount").innerText = `প্রযোজ্য যাকাত: ${zakatAmount.toFixed(2)} টাকা`;

    // ফর্ম লুকিয়ে ফলাফল দেখানো
    document.getElementById("zakatFormContainer").style.display = "none";
    document.getElementById("resultContainer").style.display = "block";
}

function resetCalculator() {
    document.getElementById("zakatForm").reset();
    document.getElementById("zakatFormContainer").style.display = "block";
    document.getElementById("resultContainer").style.display = "none";
        }
