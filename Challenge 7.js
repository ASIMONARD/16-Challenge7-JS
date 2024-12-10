function calcTip(bills) {
    let tip
    if (bills >= 50 && bills <= 300) {
        tip = bills * 15/100
    } else {
        tip = bills * 20/100
    }
    let total = bills + tip
    return [{'Facture': bills, 'pourboire': tip, 'total': total}]
}

const bills = [125, 555, 44]
for (let i = 0; i < bills.length; i++) {
    console.table(calcTip(bills[i]))
}


