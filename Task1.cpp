#include <iostream>
#include<string>
#include<vector>
using namespace std;

int getMissingNo(vector<int> arr, int n)
{
    int total = (n + 1) * (n + 2) / 2;
    for (int x: arr)
        total -= x;
    return total;
}

int main(){
    int input, value;
    vector<int> arr;
    string str;
    cout << "Enter a Number(n) and a range of number from 1 to n-1 with a missing number on next line:"<<endl;
    cin >> input;
    for(int i=0; i<input-1; i++){
        int temp;
        cin >> temp;
        arr.push_back(temp);
    }
    int missingno = getMissingNo(arr,arr.size());
    cout<<missingno;
}