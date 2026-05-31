# CSS Custom Properties (Variáveis) - MovePlus

## 📋 Variáveis de Cor Padrão

Todas as cores do site estão definidas em **`css/reset.css`** usando CSS Custom Properties:

```css
:root {
  --color-primary: #d72991;        /* Rosa/Pink - Cor principal */
  --color-primary-light: #f9d9ff;  /* Rosa clara - Cor secundária */
  --color-text: #555;              /* Cinza - Texto padrão */
  --color-text-dark: #333;         /* Cinza escuro - Texto mais contraste */
  --color-dark: #222;              /* Quase preto - Backgrounds */
  --color-white: #fff;             /* Branco - Elementos de contraste */
}
```

## 🎨 Quando Usar Cada Cor

| Variável | Uso | Exemplo |
|----------|-----|---------|
| `--color-primary` | Cor principal do site, botões, links ativos | Botões, headers, títulos em destaque |
| `--color-primary-light` | Fundo clara para destacar, contraste com primária | Cards, seção hero background |
| `--color-text` | Texto padrão do corpo | Parágrafos, descrições |
| `--color-text-dark` | Texto que precisa mais contraste | Texto em backgrounds claros |
| `--color-dark` | Backgrounds escuros | Footer, headers |
| `--color-white` | Backgrounds claros e texto sobre escuro | Botões, cards, contraste |

## 📝 Tipografia Padrão

Definida em **`css/reset.css`**:

```css
h2 { font-size: 2.5rem; }    /* Títulos principais de seção */
h3 { font-size: 1.5rem; }    /* Subtítulos */
h4 { font-size: 1.2rem; }    /* Títulos secundários */
p  { font-size: 1.1rem; }    /* Texto do corpo */
```

## 💡 Como Usar nos CSS

**Sempre use as variáveis no lugar de cores hardcoded:**

### ❌ ERRADO:
```css
.meu-elemento {
  color: #d72991;
  background: #f9d9ff;
}
```

### ✅ CORRETO:
```css
.meu-elemento {
  color: var(--color-primary);
  background: var(--color-primary-light);
}
```

## 🚀 Benefícios

✨ **Consistência** - Todas as cores em um único lugar  
🔄 **Manutenção Fácil** - Mudar cor uma vez afeta todo o site  
📱 **Responsivo** - Possibilidade de variar cores por tema ou viewport  
🎯 **Profissional** - Segue padrão usado no mercado  

## 📂 Estrutura de Arquivo

```
css/
├── reset.css          ← Variáveis definidas aqui
├── header.css         ← Usa var(--color-primary)
├── hero.css           ← Usa var(--color-white)
├── advantages.css     ← Usa var(--color-text)
└── ... (outros arquivos usam as variáveis)
```

---

**Padrão em uso: CSS Custom Properties** (recomendado pelo W3C e usado por empresas como Google, Microsoft, etc.)
