var uniquePaths = function(m, n) {

    

    return jiecheng(m+n-2)/jiecheng(m-1)/jiecheng(n-1);

};



function jiecheng(n) {

    var ret = 1;

    for(var i=1;i<=n;i++) {

        ret = ret * i;

    }

    return ret;

}

console.log(uniquePaths(3,7));
