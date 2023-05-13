let count = 0;
function printNtimes() {
    if (count == 3) return;
    console.log(count);
    count++;
    printNtimes();
}

printNtimes();