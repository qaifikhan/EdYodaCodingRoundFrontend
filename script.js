// You have 30 minutes to complete these questions
// Please do not change the function names
// Submit the answer as Github URL or Codepen URL at following URL -> https://forms.gle/w6HtcHD1kkbKZ7Cz8

// Question 1: 
// You have an unsorted array of non-negative integers and a number s.
// Find the longest continuous subarray in arr such that has a sum equal to s.
// Return two integers that represent its inclusive bounds.
// If there are several possible answers, return the one with the smallest left bound.
// If there are no answers, return [-1].
// Your answer should be 1-based, meaning that the first position of the array is 1 instead of 0.
// Example 1:
// Input: s: 12, arr: [1, 2, 3, 7, 5]
// Output: [2, 4]
// Example 2:
// Input s: 15 arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Output: [1, 5]
// Example 3:
// Input: s: 3 arr: [2]
// Output: [-1]
function findLongestArraySnippetBasedOnSum(s, arr) {
int n=A.size();
    int i=0,maxm=0,count=0,start=0,end=-1;
    int fstart=-1,fend=-1;
    long long int sum=0,maxsum=0;
    vector<int> res;
    while(i<n){
        if(A[i]>=0){
            sum+=A[i];
            count++;
            end++;
        }
        if(sum>maxsum){
            maxsum=sum;
            fstart=start;
            fend=end;
        }
        else if(sum==maxsum&&count>maxm){
            maxm=count;
            fstart=start;
            fend=end;
        }
        if(A[i]<0){
            count=0;
            start=i+1;end=i;
            sum=0;
        }
        i++;
    }
    if(fstart!=-1&&fend!=-1){
        for(int i=fstart;i<=fend;i++)
         res.push_back(A[i]);
    }
    return res;
}
}

// Question 2:
// Merge the two arrays as keys and values into an object.
// If the key names contain '-' then convert it to camelcasing. 
// If there are duplicate values in keys array then add one key but merge values into an array.
// Return the final object.
// Example 1:
// Input: keys = ['maths', 'science', 'english-lit', social-science] and values = [90, 80, 95, 92]
// Output: {maths: 90, science: 80, englishLit: 95, socialScience: 92}
// Example 2:
// Input: keys = ['username', 'first-name', 'last-name', 'age', 'username'] and  values = ['johndoe', 'John', 'Doe', 35, 'johnny']
// Output: {username: ['johndoe', 'johnny'], firstName: 'John', lastName: 'Doe', age: 35}

function mergeArrays(keys, values) {
   var columns = ["Date", "Number", "Size", "Location", "Age"];
var rows = ["2001", "5", "Big", "Sydney", "25"];
var result =  rows.reduce(function(result, field, index) {
  result[columns[index]] = field;
  return result;
}, {})

console.log(result);
}
