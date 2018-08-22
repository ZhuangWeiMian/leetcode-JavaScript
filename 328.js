var oddEvenList = function(head) {
    if (head === null) {
        return head
    }
  let result = head;
  let tail = head;
  let length = 1
  while(tail.next) {
      tail = tail.next
      length++;
  }
  length = Math.floor(length/2)
  let tailHead = tail;
  while(length) {
      tail.next = head.next;
      head.next = head.next.next;
      tail = tail.next;
      tail.next = null
      head = head.next;
      length--;
  }
  return result;
};