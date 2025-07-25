# 🖼️ Obsidian Markdown Paste Plugin

![이미지](https://i.imgur.com/1PNqfl2.png)

> 클립보드의 이미지를 자동으로 저장하고, 마크다운에 `![]()` 형식으로 삽입하는 Obsidian 플러그인입니다.

---

## 주요 기능

- 클립보드에 복사된 이미지를 감지  
- 현재 편집 중인 Markdown 파일의 **같은 폴더**에 자동 저장  
- 파일 이름 자동 증가 (예: `screen1.png`, `screen2.png`...)  
- `![](screenX.png)` 형식으로 마크다운에 삽입  
- Obsidian에서 붙여넣기(`Ctrl+V` 또는 `Cmd+V`)만 하면 끝
  
</br>

## 이미지 저장 위치

- 기본 경로: 현재 편집 중인 `.md` 파일과 **같은 폴더**
- 예: `/docs/mynote.md` → `/docs/screen1.png`
  
</br>

## 파일 네이밍 규칙

- `screen1.png`, `screen2.png`, ..., `screenN.png`
- 같은 폴더에 있는 기존 이미지 숫자를 기준으로 자동 증가
  
</br>

## 왜 이 플러그인이 유용한가요?

1. Obsidian 기본 동작은 이미지 붙여넣기 시 루트나 고정 경로에 저장합니다.  
이 플러그인은 현재 파일 기준으로 저장 위치를 **자동 지정**하며, 사용자가 별도 파일명을 고민할 필요 없이 연속적으로 정리된 이름으로 저장됩니다.

2.   `[[Pasted Image X.png]]` 로 Obsidian만의 이미지 양식을 `![](screenX.png)` 와 같은 마크다운 표준 이미지 양식으로 변경합니다.

</br>

## 설치 방법

1. 이 저장소를 `.obsidian/plugins/replace-embed-on-paste` 폴더에 복사
2. `main.js`, `manifest.json` 포함 확인
3. Obsidian → 설정 → 플러그인 → "Replace Embed on Paste" 활성화


</br>