# find smallest
def findSmallest(arr):
  smallest = arr[0]
  smallest_index = 0
  for i,num in enumerate(arr):
    if num < smallest:
      smallest = num
      smallest_index = i
  return smallest_index

# selection sort
def selectionSort(arr):
  newArr = []
  for i in range(len(arr)):
    smallest = findSmallest(arr)
    newArr.append(arr.pop(smallest))
  return newArr

print(selectionSort([1,3,5,63,3,6,23,234,235,6,7,345,3,2,53345,345,6,32]))