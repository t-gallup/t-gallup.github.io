def func(s):
    left, right = 0, 0
    curr_chars = {}
    max_val = 0
    n = len(s)
    if n < 2:
        return n
    
    while right < n:
        c = s[right]
        if c in curr_chars:
            left = curr_chars[c] + 1
        curr_chars[c] = right
        max_val = max(max_val, right - left + 1)
        right += 1
    return max_val

print(func('bbbbbb'))