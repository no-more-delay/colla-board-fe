# Colla Board

**Colla Board**는 실시간 협업이 가능한 온라인 문서 작성 플랫폼입니다.  
여러 사용자가 동시에 하나의 문서를 편집할 수 있으며, 직관적인 UI와 강력한 에디터 기능을 제공합니다.

## 🚀 주요 기능

- ✏️ **실시간 동시 편집**: 여러 사용자가 하나의 문서를 동시에 편집 가능
- 🧑‍🤝‍🧑 **협업 기능**: 공동 작업자 초대 및 실시간 커서 위치 확인
- 💾 **자동 저장**: 작성한 내용이 실시간으로 저장됨
- 📁 **문서 관리**: 문서 생성, 목록 확인, 삭제 기능
- 🗂 **폴더 기반 분류** (예정): 문서를 폴더 단위로 정리 가능
- 🌙 **다크 모드 지원**

## 🛠️ 사용 기술 스택

- **Frontend**

  - Next.js (App Router)
  - TypeScript
  - Tailwind CSS
  - Zustand
  - TipTap

- **기타**
  - Vercel (배포)
  - ESLint, Prettier, Husky

## 📸 데모

> (추후 배포 링크 또는 GIF, 스크린샷 추가 예정)

## 🧪 실행 방법

### 1. 레포 클론

```
git clone https://github.com/your-username/colla-board.git
cd colla-board
```

### 2. 패키지 설치

```
pnpm install # 또는 yarn / npm
```

### 3. 개발 서버 실행

```
pnpm dev
```

## 🗓️ 개발 로드맵

[] 📄 문서 에디터 기본 기능

- TipTap 리치 텍스트 에디터 구현 (텍스트, 볼드, 리스트 등)

[] 🎨 다크 모드 지원

- Tailwind와 상태 관리 도입하여 사용자 테마 전환 기능 구현

[] 🔐 인증 및 사용자 관리

- 이메일/소셜 로그인

[] 🤝 실시간 협업 기능 (공동 편집자 초대 및 실시간 커서)

- TipTap + Yjs 이용, 실시간 커서 동기화 및 초대 기능
- OT (Operational Transform) 고려 (Google Docs도 이 방식)
- 룸 생성 없이 사용자에게 둘 수 있나?
  - Yjs + WebSocket provider (서버가 room 관리를 최소화하고 동기화만 중개)
  - 서버에 방(room)을 저장하지 않고, 클라이언트에서 UUID 기반으로 방을 만들고 서버는 그걸 라우팅만 해주는 방식

[] 🕓 문서 이력 관리

- 작성 내역 자동 저장 및 이전 버전 비교 기능

[] 💬 댓글 및 코멘트 기능

- 특정 문장 또는 블록에 코멘트를 남길 수 있는 기능
