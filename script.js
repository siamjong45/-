function calculateZakat() {
    // ইউজারের ইনপুট নেয়া
    let cash = parseFloat(document.getElementById("cash").value) || 0;
    let bank = parseFloat(document.getElementById("bank").value) || 0;
    let gold = parseFloat(document.getElementById("gold").value) || 0; // গ্রামে
    let silver = parseFloat(document.getElementById("silver").value) || 0; // গ্রামে
    let investment = parseFloat(document.getElementById("investment").value) || 0;
    let other_assets = parseFloat(document.getElementById("other_assets").value) || 0;
    let debt = parseFloat(document.getElementById("debt").value) || 0;

    // **সোনা ও রূপার বর্তমান বাজার মূল্য (টাকা/গ্রাম)**
    let goldRate = 9000;  // উদাহরণস্বরূপ, প্রতি গ্রামের সোনার মূল্য ৯০০০ টাকা
    let silverRate = ১৫০; // প্রতি গ্রামের রূপার মূল্য ১৫০ টাকা

    // **মোট সম্পদ গণনা**
    let totalAssets = (gold * goldRate) + (silver * silverRate) + cash + bank + investment + other_assets;
    
    // **নিসাব পরিমাণের হিসাব (রূপার নিসাব অনুযায়ী)**
    let nisab = 612.36 * silverRate; // নিসাব পরিমাণ = ৬১২.৩৬ গ্রাম রূপার মূল্য

    // **মোট সম্পদ থেকে দেনা বাদ দেয়া**
    let netAssets = totalAssets - debt;

    // **যাকাত ফরজ কিনা তা চেক করা**
    let zakatAmount = 0;
    if (netAssets >= nisab) {
        zakatAmount = netAssets * 0.025; // ২.৫% যাকাত
    }

    // **ফলাফল দেখানো**
    document.getElementById("result").innerHTML = `
        <h3>মোট সম্পদ: ${totalAssets.toFixed(2)} টাকা</h3>
        <h3>মোট দায় (ঋণ): ${debt.toFixed(2)} টাকা</h3>
        <h3>প্রযোজ্য যাকাত: ${zakatAmount.toFixed(2)} টাকা</h3>
    `;
}
