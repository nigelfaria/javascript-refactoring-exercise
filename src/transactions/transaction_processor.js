
function processTransactions(transactions) {


    if (!validateTransactions(transactions)) {
        throw new Error("Undefined collection of transactions")
    }

    let txnCount = new Map();
    transactions.forEach(txn => txnCount.has(txn) ? txnCount.set(txn, txnCount.get(txn) + 1) : txnCount.set(txn, 1));
    sortedTxnCount = sortByAmountThenName(txnCount);
    return [...sortedTxnCount.entries()].map(([item, count]) => `${item} ${count}`);
}

function sortByAmountThenName(txnCount) {
    return new Map([...txnCount.entries()].sort(([firstItem, firstItemCount], [secondItem, secondItemCount]) =>
        secondItemCount - firstItemCount || firstItem > secondItem || -(firstItem < secondItem)));
}

function validateTransactions(transactions) {
    return transactions !== undefined;
}

module.exports = processTransactions;