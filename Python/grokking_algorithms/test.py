import unittest

from search import binary_search
from search import simple_search

class TestSearch(unittest.TestCase):
    def test_binary_search_valid(self):
        """
        Test that it can sum a list of integers
        """
        data = [1,2,3,4,5,6,7]
        result = binary_search(data, 3)
        self.assertEqual(result, 2)

    def test_binary_search_invalid(self):
        """
        Test that it can sum a list of integers
        """
        data = [1,2,3,4,5,6,7]
        result = binary_search(data, -1)
        self.assertEqual(result, None)

    def test_simple_search_valid(self):
        """
        Test that it can sum a list of integers
        """
        data = [1,2,3,4,5,6,7]
        result = simple_search(data, 3)
        self.assertEqual(result, 2)

    def test_simple_search_invalid(self):
        """
        Test that it can sum a list of integers
        """
        data = [1,2,3,4,5,6,7]
        result = simple_search(data, -1)
        self.assertEqual(result, None)

if __name__ == '__main__':
    unittest.main()