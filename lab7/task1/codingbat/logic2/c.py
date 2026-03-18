def make_chocolate(small, big, goal):
    max_big = goal // 5
    
    if big >= max_big:
        remainder = goal - (max_big * 5)
    else:
        remainder = goal - (big * 5)

    if remainder <= small:
        return remainder
    
    return -1