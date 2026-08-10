// Pattern 1
c = " ";
for (j = 0; j < 5; j++) {
    c = (c + "*");
    console.log(c);
}
console.log('  ');

// Pattern 2
c = " ";
for (j = 1; j <= 5; j++) {
    c = c + j;
    console.log(c);
}
console.log('  ');


// Pattern 3
c = " ";
for (j = 0; j < 5; j++) {
    c = (c + "*");
    console.log(c);
}
for (i = 5; i > 1; --i) {
    c = " ";
    for (j = 1; j < i; j++) {
        c = (c + "*");
    }
    console.log(c);
}

console.log('  ');

// Pattern 4

for (i = 5; i > 0; i--) {
    p = "", k = "";
    for (j = i; j > 0; j--) {
        p = p + j;
    }

    for (j = 0; j < 5 - i; ++j) {
        k = k + " ";
    }
    console.log(k + p);
}

console.log('  ');

//Pattern 5
for (i = 1; i <= 5; ++i) {
    p = "", c = "1";
    for (j = 5 - i; j > 0; --j) {
        p = p + " ";
    }
    for (o = 2; o <= i; o++) {
        c = o + c + o;
    }
    k = p + c + p;
    console.log(k);
}

/*
OUTPUT
____________________________________________________________________________

 PS C: \Users\ shivam.giri\ Documents\ Javascript > node Assignment1.js

*
**
***
****
*****


1
12
123
1234
12345


*
**
***
****
*****
****
***
**
*

54321
4321
321
21
1

     1
    212
   32123
  4321234
 543212345


*/