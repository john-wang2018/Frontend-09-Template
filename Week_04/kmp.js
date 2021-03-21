function kmp(source, pattern) {
    let table = new Array(pattern.length).fill(0);

    {
         //i 对应的是当前的字符位置，j从0开始，用来统计当前的最长前后缀长度
        let i = 1, j = 0;
        while(i < pattern.length) {
            if(pattern[i] === pattern[j]) {
                ++j, ++i;
                table[i] = j;
                // console.log(i,j);
            } else {
                if(j > 0) {
                    j = table[j];
                    // console.log("j = table[j]", j , table[j]);
                } else {
                    ++i;  
                }
            }   
        }
        console.log(table);
    }
    {
        let i = 0, j = 0;
        while(i < source.length) {
            if(pattern[j] == source[i]) {
                ++i, ++j;
            } else {
                //回退
                if(j > 0) {
                    j = table[j];
                } else {
                    ++i;
                }   
            }
            if(j === pattern.length) {
                return true;
            }
        }
        return false;
    }
}

kmp("", "aabaaac");
// console.log(kmp("aabaabaaacx", "aabaaac"));
console.log(kmp("abc", "abc"));

// console.log(kmp("abcdabcdabcex", "abcdabce"));

//a a b a a a c
//0 0 1 0 1 2 2