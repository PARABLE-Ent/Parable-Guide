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

## 명명 규칙
### 1. Asset 명명 규약
명명 규약들은 **사내 규정**과 같이 여깁니다. 이를 따르지 않으면 불필요한 재교육이 반복됩니다. <br/>
스타일 가이드를 따르지 않는 에셋 혹은 작업자를 발견시 꼭 이야기하고 고쳐야 합니다.

#### 1-1. 유니코드 문자 사용
파일명과 폴더명에는 `#`, `-`, `_`, `,`, `*`, `#`, `a-z`, `A-Z` 그리고 `0-9`. <br/>
위 문자 외에 것을 사용하지 않습니다. 반드시 한글과 공백이 존재해서는 안됩니다.

#### 1-2. 베이스 에셋 이름
**`Prefix_BaseAssetName_Variant_Suffix`** 구조를 기준으로 사용합니다. <br/>
**Prefix**, **Suffix**의 네이밍은 `1-3`에서 확인해주세요. <br/>

**BaseAssetName**은 해당 에셋의 그룹에 연관되는 짧고 인식하기 쉬운 이름이어야 합니다. <br/>
**싸이코드 루이쨘** 아바타를 예로 들면, 모든 **루이쨘**의 에셋들은 **BaseAssetName**이 **LouisZzan**이 되어야 합니다. <br/>

**Variant**는 Asset Name의 하위 Name으로, 여러 Variation이 분류 될 경우 사용됩니다. <br/>

**이세계아이돌 아이네**의 기본 모델링이 **Ine**로 분류되면, 아이네 Vaundy 노래 커버 모델의 BaseAssetName_Variant는 **Ine_Vaundy** 가 됩니다. <br/>

캐릭터가 아닌 Static Mesh의 경우 특별한 논리가 없다면 **'Door_01'**, **'Door_02'**, **'Door_03'** 등 숫자로 분류합니다.

ex) 루이쨘 모델
| **Asset Type** | **Asset Name** |
| --- | --- |
| Mesh | SK_LouisZzan
| Material | M_LouisZzan_Body |
| Texture (Clothes BaseMap) | T_LouisZzan_Clothes_B |
| Texture (Clothes Normal) | T_LouisZzan_Clothes_N |
| Texture (Body BaseMap) | T_LouisZzan_Body_B |

ex) Door
| **Asset Type** | **Asset Name** |
| --- | --- |
| Mesh | SM_Door_01 |
| Material | M_Door |
| Texture (BaseMap) | T_Door_B |
| Texture (Normal) | T_Door_N |
| Texture (AO) | T_Door_AO |

#### 1-3. 에셋 이름 수식어
Asset Type에 따른 Prefix와 Suffix를 어떻게 정의하는지에 대한 테이블입니다. <br/>
아래 테이블을 기준으로 파일명을 분류하시기 바랍니다.

1-3-1. Common / Unity / Unreal Engine
| **Asset Type** | **Prefix** | **Suffix** | **Memo** |
| --- | --- | --- | --- |
| Scene |  |  | Scene 폴더에 위치하며, 월드의 이름을 사용하는걸 권장합니다. |
| Scene (Overview) |  | _Overview |  |
| Mesh (Object) | SM_ |  | Static Mesh의 준말입니다. |
| Mesh (Character) | SK_ | _Body, _Face, _etc.. | *Skeletal Mesh의 준말입니다.
Suffix에는 각 부위에 맞는 네이밍을 지정합니다.* |
| Material | M_ |  |  |
| Texture | T_ | _? | Suffix는 1-3-4를 확인해주세요. |
| Prefab | Prefab_ |  |  |
| Particle System | PS_ |  |  |
| Visual Effect | VFX_ |  |  |
| Shader |  |  | Shader의 최종 구현 룩을 단어로 표현합니다.
ex) Bubble, Aurora, Shield |
| Script |  |  |  |
| PostProcess | PP_ |  | URP의 Global Volume도 Post Process로 명명합니다. |

1-3-2. Animations
| **Asset Type** | **Prefix** | **Suffix** | **Memo** |
| --- | --- | --- | --- |
| Animation | Anim_ |  |  |
| Animator Controller | AMC_ |  |  |
| Animator Override Controller | AMOC_ |  |  |
| Signal | Signal_ | _? | 이벤트에 따른 이름을 사용합니다. |

1-3-3. Material
| **Asset Type** | **Prefix** | **Suffix** | **Memo** |
| --- | --- | --- | --- |
| Material | M_ |  |  |
| Material Variant | M_ | _Vari |  |

1-3-4. Texture
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
| Render Texture | RT_ |  |  |

## 프로젝트 폴더 구조
어떠한 스크립트들은 폴더 경로에 따라 기능들이 동작하기도 합니다. Asset 명명 규약과 마찬가지로 이 또한 법처럼 여겨야 합니다. 둘 중 하나라도 위반한다면 불필요한 혼란이 발생합니다.

### 유니티 프로젝트 폴더 네이밍 규칙
:::tip
프로젝트에 치명적인 오류가 발생하지 않는한 이 규칙을 무조건적으로 따라야 합니다.
기본 분류 구성을 따른다면 추가적인 에셋 또한 유기적으로 분류할 수 있습니다.

아래 규칙은 Unity에서 추천하는 폴더 관리 및 네이밍 규칙을 기반으로,
VFX/애니메이션 프로덕션 파이프라인으로 재구성하여 생성되었습니다.
:::

#### 애니메이션 프로덕션용

<details>
  <summary> - </summary>
</details>

#### 개발 프로젝트용

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