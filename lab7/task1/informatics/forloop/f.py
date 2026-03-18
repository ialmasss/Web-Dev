x = input();
rev = "";

for i in range(len(x) - 1, -1, -1):
    rev += x[i];

print(int(rev));