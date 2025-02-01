---
sidebar_position: 1
toc_min_heading_level: 2
toc_max_heading_level: 5
---

# 명명 규칙 및 폴더 구조

## 개요
3D 프로젝트에서 **Directory**와 **File Name**은 굉장히 중요합니다. <br/>
Engine 및 DCC 툴에서는 폴더 구조 및 네이밍으로 파일을 인식하고 연결되는 경우가 일반적입니다. <br/>

규격에서 벗어난 파일들은 협업시 많은 어려움을 동반합니다. <br/>
꼭 규칙을 지켜주시기 바랍니다.

## 0. 파일/폴더 공통 규칙

### PascalCase 사용
공백(Spaces)을 사용하는 대신, 대문자로 시작하고 모든 다음 단어들 또한 대문자로 시작되는 **PascalCase**를 사용합니다. <br/>

### 공백 (Spaces) 사용 금지
공백들은 DCC 및 엔진, 각종 툴의 배치 처리과정들에서 오류를 야기할 수 있습니다. <br/>
프로젝트의 루트 또한 스페이스를 포함시키지 않도록 하고, 프로젝트는 `C:/Users/My Name/My Documents` 대신 `D:/Project`와 같은 곳에 위치 시키도록 합니다.

### 유니코드 문자 사용 금지
에셋 및 폴더 이름에는 **`a-z`**, **`A-Z`**, **`0-9`** 와 **`_`** 만 사용해야 합니다. <br/>
`@`, `-`, `,`, `*`, `#` 등의 문자는 예기치 않은 문제를 일으킬 수 있습니다. <br/>

이것과 관련하여 다시 얘기하자면 `내 문서 (My document)` 폴더에 위치한 프로젝트의 경우도 문제가 발생할 수 있습니다. <br/>
`D:/Project`와 같은 경로로 이동하는것 만으로도 여러 불가사의한 이슈들이 수정 될 수 있습니다.

## 1. 프로젝트 폴더 구조
어떠한 스크립트들은 폴더 경로에 따라 기능들이 동작하기도 합니다. **Assets 명명 규약**과 마찬가지로 이 또한 법처럼 여겨야 합니다. 둘 중 하나라도 위반한다면 불필요한 혼란이 발생합니다. <br/>

### 1-1. 프로젝트별 최상위 폴더 사용
모든 프로젝트 에셋은 프로젝트 이름을 따온 폴더 내에 존재해야 합니다. <br/>
예를 들어, 프로젝트 이름이 **Soop_EndOfYear**라면 모든 콘텐츠는 `Assets/Soop_EndOfYear` 폴더 내에 있어야 합니다. <br/>

이 방식을 사용하는 데에는 여러가지 이유가 있습니다.

#### <span style={{ fontSize:'20px'}}>글로벌 에셋 관리</span>
Code Style Guide에서는 **Global Namespace**를 오염시키지 말 것을 권장하며, 에셋 구조에서도 같은 원칙을 적용합니다. <br/>
에셋이 전역에 흩어져있으면 엄격한 구조를 유지하기 어려워지고, 조직화되지 않은 에셋들이 발생할 가능성이 높아집니다.

모든 에셋은 목적을 가지고 있어야 합니다. 프로젝트에서 사용되지 않는 **`실험적 테스트 에셋`** 이라면 **`Developer`** 폴더에 배치해야 합니다.

#### <span style={{ fontSize:'20px'}}>마이그레이션 충돌 방지</span>
여러 프로젝트에서 작업할 때, 팀이 유용한 에셋을 기존 프로젝트에서 다른 프로젝트로 복사하는 경우가 흔히 발생합니다. <br/>
모든 프로젝트별 에셋을 최상위 폴더에 배치하면 새로운 프로젝트로 에셋을 가져올 때 발생할 수 있는 충돌 가능성을 줄일 수 있습니다.

### 1-2. Local Test를 위한 Developer 폴더 사용
프로젝트 진행 중, 팀원들이 프로젝트의 핵심 구조를 손상시키지 않으면서 자유롭게 실험할 수 있도록 **`샌드박스`** 환경을 제공하기 위한 폴더입니다. <br/>

이는 각 팀원의 전용 폴더로 `Assets/Developer/UserName` 을 사용합니다. <br/>
기본적으로 커밋에서는 제외하지만, 필요로 할 때는 **Source Control**을 통해 커밋하여도 좋습니다. <br/>
그러나 가능한 프로젝트 폴더로 에셋을 마이그레이션 후 커밋 해주세요.

### 1-3. 모든 Scene 파일은 Scenes 폴더에 저장
Scene 파일은 프로젝트에서 매우 중요한 요소입니다. <br/>
모든 Scene은 `Assets/ProjectName/Scenes` 폴더 내에 있어야 합니다.

특정 맵을 열어야 할 때 경로를 따로 설명할 필요 없이 쉽게 찾을 수 있다면 팀의 작업 속도가 향상되며, 프로젝트 관리가 더욱 수월해집니다. <br/>

Scenes 폴더 내에 `Scenes/AssetGuide/` 또는 `Scenes/Stage1/`과 같이 하위 폴더를 포함할 수도 있지만, 가장 중요한 점은 모든 Scene 파일이 `Assets/ProjectName/Scenes` 폴더 내에 위치해야 한다는 것입니다. <br/>

### 1-4. 소유권 정의
두 명 이상의 팀원이 함께 작업하는 경우, 각 에셋들의 **소유권**을 명확히 정의해야 합니다. <br/>

일부 에셋 ***(예: Scene, Prefab)*** 은 여러 사람이 동시에 변경할 경우 충돌이 발생합니다.<br/>
따라서, 특정 에셋을 변경할 권한을 가진 단일 책임자를 지정함으로써 이러한 문제를 예방할 수 있습니다.

:::tip Source Control
**Perforce, SVN, Git LFS** 등을 사용하면 특정 파일을 잠글 수 있습니다. <br/>
이를 통해 **'나'** 이외의 사람이 파일을 편집할 수 없게 만들 수 있습니다. <br/>
지금은 Git만 사용하고 있으므로, 소유권을 정의하여 충돌이 나지 않게끔 관리해주세요.
:::

### 1-5. Assets 폴더 생성 금지
Unity에서 Root 폴더는 자동으로 **`Assets`** 이 됩니다. 별도의 **`Assets`** 폴더를 만드는 것은 중복 행위입니다.

### 1-6. 대규모 에셋 세트는 별도 폴더 레이아웃을 사용
일부 에셋 유형은 관련 파일의 양이 방대하여, 각 에셋이 고유한 목적을 가질 수 있습니다. <br/>
대표적인 예로는 **Animation** 및 **Audio** 에셋이 있습니다. 만약 관련된 에셋이 15개 이상이라면, 이들을 하나의 폴더에 함께 배치하는 것이 좋습니다.

예를 들어, 여러 캐릭터에서 공유하는 애니메이션은 `Characters/Common/Animations` 폴더에 배치하고, 하위 폴더로 **`Locomotion`**, **`Cinematic`** 을 추가할 수 있습니다. <br/>


> 이 규칙은 텍스처나 머티리얼과 같은 에셋에는 적용하지 않습니다. 예를 들어 `Rocks` 폴더에는 많은 텍스처가 포함될 수 있지만, UV에 따라 특정 바위 메쉬와만 관련이 있을 수 있기 때문입니다.
>

### 1-7. Art 폴더
프로젝트에서 특정 그룹에 속하지 않는 공용 에셋은 **Art** 폴더에 위치합니다. <br/>
`ProjectName/Art/Shaders`, `ProjectName/Art/Models`, `ProjectName/Art/Textures`와 같이 사용됩니다.

이렇게 하면 모든 **글로벌** 파일들이 체계적으로 정리되며 쉽게 찾을 수 있습니다.

### 1-8. Scene Hierarchy 구조
프로젝트의 계층 구조와 마찬가지로, Scene의 계층 구조도 중요합니다. 아래는 기본 템플릿입니다. <br/>
필요에 따라 조정하여 사용할 수 있습니다.

```
@System
@Management
@Debug
UI
|-- Layouts
Camera
|-- DefaultCamera
|-- CineCamera
Timeline
Lights
|-- Realtime_Light
|-- Bake_Lights
|-- Volume
VFX
|-- Particles
|-- VFX
World
|-- Global
|-- Room1
    |-- Architecture
    |-- Terrain
    |-- Props
|-- Room2
    |-- Architecture
    |-- Terrain
    |-- Props
Character (or Avatar)
Sound
_Dynamic
```
- 모든 빈 오브젝트는 기본 위치(0, 0, 0)과 회전 및 스케일을 유지하고 편집해야 합니다.
- 스크립트 전용 컨테이너 역할을 하는 빈 오브젝트의 경우, 접두사로 `@`를 사용하세요. <br/>
  **ex. @UI, @System**
- 런타임에 생성되는 오브젝트는 `_Dynamic`안에 배치해야 합니다. <br/>
  씬 루트에 배치하면 계층 구조가 복잡해져 탐색이 어려워집니다.

:::info
Hierarchy에 **아이콘 및 Color** 등을 표기하여 가독성을 높이는 Plugin을 추후 배포할 예정입니다. <br/>
:::

## 2. Assets 명명 규약
명명 규약들은 **사내 규정**과 같이 여깁니다. 이를 따르지 않으면 불필요한 재교육이 반복됩니다. <br/>
일관된 네이밍 규칙을 따르면, 프로젝트 내에서 에셋을 쉽게 관리, 검색, 분석 및 유지보수 할 수 있습니다. <br/>

모든 에셋은 **PascalCase** 형식을 따라야 합니다. <br/>
대부분의 에셋은 접두사를 사용하며, 일반적으로 에셋 유형의 약어 뒤에 **언더스코어 (`_`)** 가 붙습니다.

### 2-1. 베이스 에셋 이름
**`Prefix_BaseAssetName_Variant_Suffix`** 구조를 기준으로 사용합니다. <br/>
**Prefix**, **Suffix**의 네이밍은 [**2-2**](/docs/File_Management_Regulations/File_Folder_Regulations#2-2-에셋-이름-수식어)에서 확인해주세요. <br/>

**BaseAssetName**은 해당 에셋의 그룹에 연관되는 짧고 인식하기 쉬운 이름이어야 합니다. <br/>
**싸이코드 루이쨘** 아바타를 예로 들면, 모든 **루이쨘**의 에셋들은 **BaseAssetName**이 **LouisZzan**이 되어야 합니다. <br/>

특정한 변형(Variant)이 있는 에셋의 경우, Variant는 에셋의 논리적 그룹을 구별할 수 있는 짧고 직관적인 이름이어야 합니다. <br/>
예를 들어, **Ine**가 여러개의 의상을 가지고 있다면, 기본 네이밍은 유지한 채로 변형을 추가해야 합니다. <br/>

Vaundy 커버 의상은 **`Ine_Vaundy`**, 숲 연말 시상식 의상은 **`Ine_SoopEndOfYear`** 와 같이 명명합니다. <br/>

<span style={{ fontSize:'20px'}}>**Object Variant**</span> <br/>
특정한 의미가 없는 변형이 여러개 존재하는 경우, `Variant`는 `01`부터 시작하는 두 자리 숫자를 사용해야 합니다. <br/>
예를 들어, 배경 아티스트가 여러 개의 랜덤한 바위를 제작했다면, `Rock_01`, `Rock_02`, `Rock_03` 등의 네이밍을 사용합니다. <br/>

<span style={{ fontSize:'20px'}}>**Chain Variant**</span> <br/>
특정한 변형 체계를 사용할 경우, 여러 개의 변형을 연결할 수도 있습니다. <br/>
예를 들어, Arch Viz 프로젝트에서 바닥재 (Flooring) 에셋을 생성한다면, `Flooring_Marble_01`, `Flooring_Maple_01`, `Flooring_Tile_Squares_01`과 같이 변형을 체인으로 연결할 수 있습니다.

**ex) Character 에셋**
| **Asset Type** | **Asset Name** |
| --- | --- |
| Skeletal Mesh | SK_LouisZzan
| Material | M_LouisZzan_Body |
| Texture (BaseMap) | T_LouisZzan_B |
| Texture (Normal) | T_LouisZzan_N |
| Texture (Body BaseMap) | T_LouisZzan_Body_B |

**ex) Prop 에셋**
| **Asset Type** | **Asset Name** |
| --- | --- |
| Static Mesh (01) | SM_Door_01 |
| Static Mesh (02) | SM_Door_02 |
| Material | M_Door |
| Material Variant | M_Door_Grunge
| Texture (BaseMap) | T_Door_B |
| Texture (Grunge BaseMap) | T_Door_Grunge_B |
| Texture (AO) | T_Door_AO |





### 2-2. 에셋 이름 수식어
Asset Type에 따른 **Prefix**와 **Suffix**를 어떻게 정의하는지에 대한 테이블입니다. <br/>
아래 테이블을 기준으로 파일명을 분류하시기 바랍니다.

#### 2-2-1. Common
| **Asset Type** | **Prefix** | **Suffix** | **Memo** |
|     ---      |     ---      |     ---      |     ---      |
| Scene |   |  | Scenes 폴더에 위치하며, 월드의 이름을 사용하는걸 권장합니다. |
| Scene (Overview) |  | _Overview |  |
| Prefab       |              |              |              |
| Probe (Reflection ) | ReflectionProbe_ |              |              |
| Volume | V_ |
| Material | M_ |
| Static Mesh | SM_ |
| Skeletal Mesh | SK_ |
| Texture | T_ | _? | [2-2-4. Texture 참고](/docs/File_Management_Regulations/File_Folder_Regulations#2-2-4-texture)  |
| Visual Effects | VFX_ |
| Particle System | PS_ |
| Light | L_
| Camera | CM_ |  | Virtual Camera |


#### 2-2-2. Animations
| **Asset Type** | **Prefix** | **Suffix** | **Memo** |
| --- | --- | --- | --- |
| Animation | Anim_ |  |  |
| Animator Controller | AC_ |  |  |
| Avatar Mask | AM_ |
| Signal | Signal_ | _? | 이벤트에 따른 이름을 사용합니다. |

#### 2-2-3. Material
| **Asset Type** | **Prefix** | **Suffix** | **Memo** |
| --- | --- | --- | --- |
| Material | M_ |  |  |
| Material Variant | M_ | _Vari |  |

#### 2-2-4. Texture
| **Asset Type** | **Prefix** | **Suffix** | **Memo** |
| --- | --- | --- | --- |
| Texture | T_ |  |  |
| Texture (BaseMap, Diffuse, Albedo) | T_ | _B |  |
| Texture (Normal) | T_ | _N |  |
| Texture (Metallic) | T_ | _M |  |
| Texture (Specular) | T_ | _S |  |
| Texture (Roughness) | T_ | _R |  |
| Texture (Smoothness) | T_ | _SN |  |
| Texture (Alpha, Opacity) | T_ | _A |  |
| Texture (Mask) | T_ | _Mask |  |
| Texture (Emissive) | T_ | _E |  |
| Texture (Ambient Occlusion) | T_ | _AO |  |
| Texture (AORM) | T_ | _AORM |
| Render Texture | RT_ |  |  |

## 3. 스크립트
스크립트는 내용이 복잡하고 길어 가이드를 별도 명시하고 있습니다. <br/>
아래 페이지에서 확인해주세요.

### 유니티 프로젝트 폴더 네이밍 규칙
:::tip
프로젝트에 치명적인 오류가 발생하지 않는한 이 규칙을 무조건적으로 따라야 합니다.
기본 분류 구성을 따른다면 추가적인 에셋 또한 유기적으로 분류할 수 있습니다.

아래 규칙은 Unity에서 추천하는 폴더 관리 및 네이밍 규칙을 기반으로,
VFX/애니메이션 프로덕션 파이프라인으로 재구성하여 생성되었습니다.
:::

#### <span style={{ fontSize:'20px'}}>애니메이션 프로덕션용</span>

<details>
  <summary> - </summary>
</details>

#### <span style={{ fontSize:'20px'}}>개발 프로젝트용</span>

<details>
 <summary> - </summary>
</details>

:::caution 루트 폴더
종종 Assets/**루트 폴더**를 꼭 사용해야 하는 경우가 있습니다. <br/>
**`ex. Assets/Gizmos, Assets/StreamingAssets, etc...`**

이러한 경우 폴더 경로가 바뀌면 프로젝트 내에 오류가 발생할 수 있습니다.
다른 팀원이 폴더를 옮기지 않도록 노티하거나 폴더에 색상을 지정하여 구분합니다.
- Parable Core 유틸리티 에셋에 폴더의 색상을 지정하는 스크립트가 추가 될 예정입니다. 추후 가이드 배포 예정
:::

### 언리얼 엔진 프로젝트 폴더 네이밍 규칙
언리얼 엔진은 ue4 Style Guide를 기반으로 사용합니다. <br/>