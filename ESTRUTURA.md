# Estrutura Reorganizada - MovePlus

## 📁 Nova Organização do Projeto

Seu projeto foi reorganizado em uma estrutura **modular e escalável**:

```
moveplus-home-completa/
├── index.html              (Arquivo principal - limpo e organizado)
├── assets/
│   └── images/            (Imagens do projeto)
├── css/
│   ├── reset.css          (Reset e estilos globais)
│   ├── header.css         (Estilos do Header)
│   ├── hero.css           (Estilos da seção Hero)
│   ├── advantages.css     (Estilos dos Diferenciais)
│   ├── services.css       (Estilos dos Serviços)
│   ├── about.css          (Estilos do Sobre)
│   ├── testimonials.css   (Estilos dos Depoimentos)
│   └── footer.css         (Estilos do Footer)
├── js/
│   └── main.js            (JavaScript principal com carregamento de seções)
└── sections/              (Arquivos HTML de cada seção)
    ├── header.html
    ├── hero.html
    ├── advantages.html
    ├── services.html
    ├── about.html
    ├── testimonials.html
    └── footer.html
```

## ✨ Benefícios da Nova Estrutura

✅ **HTML mais organizado** - O `index.html` agora é limpo com apenas ~50 linhas
✅ **CSS separado** - Cada seção tem seu próprio arquivo CSS
✅ **Fácil manutenção** - Editar uma seção não afeta as outras
✅ **Reutilizável** - Seções podem ser copiadas para outros projetos
✅ **Escalável** - Adicionar novas seções é simples

## 🔧 Como Usar

1. O arquivo `index.html` carrega os CSS na `<head>`
2. O `main.js` carrega automaticamente cada arquivo HTML da pasta `sections/`
3. Cada seção mantém sua própria lógica e estilos

## 📝 Para Adicionar uma Nova Seção

1. **Criar o arquivo HTML** em `sections/nova-secao.html`
2. **Criar o CSS** em `css/nova-secao.css`
3. **Adicionar à lista** no `js/main.js`:

```javascript
{ id: 'nova-secao-container', file: 'sections/nova-secao.html' },
```

4. **Adicionar a referência** no `index.html`:

```html
<link rel="stylesheet" href="css/nova-secao.css">
<div id="nova-secao-container"></div>
```

## 📦 Arquivos Que Podem Ser Deletados

O arquivo `css/style.css` pode ser removido agora que você tem os CSS separados.

---

**Projeto organizado com sucesso!** 🎉
