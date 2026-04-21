# 📱 Appleitor

Este aplicativo foi desenvolvido em **React Native** com **Expo** e o objetivo de auxiliar novos colaboradores nas ruas facilitando a interpretação da medição no equipamento de energia elétrica.

---

## 🚀 Funcionalidades
- Orientação fixa em **landscape** para melhor visualização e uso.
- O app possui quatro relogios na tela principal que simula o equipamento de medição da energia elétrica nas residências.
- o leiturista manipula os ponteiros de cada relogio colocando na posição que estão no equipamento para o aplicativo informar a leitura correta.
- Build configurado para:
  - **APK (preview)** → instalação direta em dispositivos Android.
- Compatibilidade com tablets (iOS e Android).

---

## 🛠️ Tecnologias utilizadas
- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [EAS Build](https://docs.expo.dev/build/introduction/)

---

## 📦 Estrutura de build
- **Preview (APK)**: usado para testes internos.

---
Configuração no `eas.json`:
```json
{
  "build": {
    "preview": {
      "android": {
        "buildType": "apk"
      }
    },
    "production": {
      "android": {
        "buildType": "app-bundle"
      }
    }
  }
}
