function DNAStrand(dna){
  const rna = {A: 'T', T: 'A', C: 'G', G: 'C'}
  return dna.split('').map(letter => rna[letter]).join('')
}