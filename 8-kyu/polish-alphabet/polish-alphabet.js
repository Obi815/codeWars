function correctPolishLetters(string) {
  const plain = { 'ą': 'a', 'ć': 'c', 'ę': 'e', 'ł': 'l', 'ń': 'n', 'ó': 'o', 'ś': 's', 'ź': 'z', 'ż': 'z' };
  return string.split('').map(c => plain[c] || c).join('');
}