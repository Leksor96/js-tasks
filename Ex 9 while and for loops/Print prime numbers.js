let cycle_repartition = 10;
next_number:
for ( let i =2 ; i <= cycle_repartition; i++) {

    for ( let j = 2; j < i; j++) {
        if ( i % j == 0) continue next_number;
    }
    console.log( i );
}