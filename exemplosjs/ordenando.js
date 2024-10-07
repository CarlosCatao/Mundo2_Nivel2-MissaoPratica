// Função swap - Troca os valores de duas posições de um vetor
const swap = (vetor, i, j) => {
    let temp = vetor[i];
    vetor[i] = vetor[j];
    vetor[j] = temp;
};

// Função shuffle - Embaralha os elementos de um vetor
const shuffle = (vetor, trocas) => {
    for (let i = 0; i < trocas; i++) {
        let pos1 = i;
        let pos2 = Math.floor(Math.random() * (i + 1));
        swap(vetor, pos1, pos2);
    }
};

// Função bubble_sort - Ordena utilizando o algoritmo do Bubble Sort
const bubble_sort = (vetor) => {
    let ordenado = false;
    while(!ordenado) {
        ordenado = true;
        for(let i=1;i<vetor.length;i++) {
            if(vetor[i-1]>vetor[i]) {
                const aux = vetor[i];
                vetor[i] = vetor[i-1];
                vetor[i-1] = aux;
                ordenado = false;
            }
        }

    }
    return vetor;
};

// Função selection_sort - Ordena utilizando o algoritmo do Selection Sort
const selection_sort = (vetor) => {
    let n = vetor.length;
    for (let i = 0; i < n; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (vetor[j] < vetor[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            swap(vetor, i, minIndex);
        }
    }
    return vetor;
};

// Função quick_sort - Ordena utilizando o algoritmo do Quick Sort
const quick_sort = (vetor, inicio, fim) => {
    if (inicio < fim) {
        let p = particionamento(vetor, inicio, fim);
        quick_sort(vetor, inicio, p - 1);
        quick_sort(vetor, p + 1, fim);
    }
    return vetor;
};

// Função particionamento - Função de apoio ao quick_sort
const particionamento = (vetor, inicio, fim) => {
    let pivot = vetor[fim];
    let i = inicio - 1;
    for (let j = inicio; j < fim; j++) {
        if (vetor[j] < pivot) {
            i++;
            swap(vetor, i, j);
        }
    }
    swap(vetor, i + 1, fim);
    return i + 1;
};
