#include <iostream>
using namespace std;

long long gcd(int a,int b){
  long long r = a;
  if(b % a == 0){
    return r;
  }
  else{
    r = b % a;
    return gcd(r, a);
  }
}

int main(){
  int n1, n2;
  cout << "Enter n1 and n2 (seperate with space): ";
  cin >> n1 >> n2;
  long long gc = gcd(n1, n2);
  cout << gc << endl;
  return 0;
}
