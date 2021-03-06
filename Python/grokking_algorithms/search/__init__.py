

# simple search O(n) - linear time
def simple_search(list, item):
  index = 0
  while index < len(list):
    if list[index] == item:
      return index
    else:
      index += 1
  return None

# binary search O(log n) - log time
def binary_search(list, item):
  # low and high indexes 
  # keep track of which part of the list youll search in
  low = 0
  high = len(list) - 1

  while low <= high:
    mid = (low + high) # the middle element
    guess = list[mid]
    if guess == item:
      return mid
    elif guess > item:
      high = mid-1
    else:
      low = mid + 1
  return None
