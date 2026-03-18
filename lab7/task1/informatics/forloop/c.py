import math

a = int(input());
b = int(input());

for i in range(a, b+1):
    r = math.isqrt(i);
    if r * r == i:
        print(i, end=" ");