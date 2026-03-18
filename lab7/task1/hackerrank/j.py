def runner_up(scores):
    score = list(set(scores))
    score.sort(reverse=True)
    return score[1]

n = int(input())
arr = list(map(int, input().split()))
print(runner_up(arr))