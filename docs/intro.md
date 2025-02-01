---
sidebar_position: 1
---

# Parable Guide Intro
<iframe
  src="/unity/index.html"
  style={{
    width: '100%',
    height: '150px',
    border: 'none',
    overflow: 'hidden'
  }}
  scrolling="no"
  frameBorder="0"/>

**패러블엔터테인먼트**의 3D 기반 프로젝트에 대한 **전사 가이드**입니다. <br/>
모든 직원은 가이드를 따라 업무를 진행하여야 합니다.

## 1. 소개

### 1-1. 스타일
>***스타일에 대한 논쟁은 무의미합니다. 스타일 가이드가 존재해야만 하며, 당신은 이것을 따라야 합니다.*** <br/>
[**- Rebecca Murphey**](https://rmurphey.com/)
>
#### <span style={{ fontSize:'20px'}}>모든 구조, 에셋, 코드는 단일 구성원이 제작한 것처럼 보여야 합니다.</span>

프로젝트 간 이동 시 스타일과 구조를 다시 학습해야 하는 상황이 발생하지 않도록 해야합니다. <br/>
스타일 가이드를 준수하면 불필요한 추측과 모호함이 줄어듭니다. <br/>

또한, 스타일을 따르기만 하면 되므로 더 생산적인 개발과 유지보수가 가능합니다. 이 스타일 가이드는 다양한 엔진 및 DCC 툴에서 사용되는 방식을 바탕으로 작성되었으며, 이를 따르면 다양한 문제를 최소화할 수 있습니다. <br/>

#### <span style={{ fontSize: '20px' }}>동료의 부적절한 행동을 방치하지 마세요.</span>
팀 내에서 스타일 가이드를 따르지 않는 동료를 발견한 경우, 이를 수정하도록 도와야 합니다. <br/>

일관된 스타일이 유지되면 협업이 쉬워지고, 도움을 요청하거나 제공하기도 수월해집니다. <br/>
복잡하게 얽힌 코드나 이해할 수 없는 구조 및 네이밍의 에셋을 다루는 것은 누구에게나 고통입니다. <br/>

### 1-2. 중요한 용어
Unity와 Unreal Engine은 서로 사용하는 용어에 차이가 있을 수 있습니다. <br/>
**현 가이드는 Unity에 적합한 표현을 사용합니다.**

#### <span style={{ fontSize:'20px'}}>Prefab</span>
Unity에서 Prefab은 GameObject 및 해당 컴포넌트, 변수 값, 하위 GameObject 등을 설정하고 재사용할 수 있도록 저장하는 시스템을 의미합니다.

#### <span style={{ fontSize:'20px'}}>Level/Map/Scene</span>
Level은 Map으로도 불리며, Unity에서는 **Scene** 이라고 합니다. Level은 객체들의 모음을 포함합니다. <br/>

#### <span style={{ fontSize:'20px'}}>Serializable</span>
Serializable한 변수는 Unity의 Inspector 창에서 표시됩니다. <br/>
자세한 내용은 Unity의 [**Serializable**](https://docs.unity3d.com/Manual/script-serialization.html) 문서를 참조하세요.

#### <span style={{ fontSize:'20px'}}>Naming Cases</span>
여러가지 네이밍 방식이 존재합니다. 일반적으로 사용되는 스타일은 다음과 같습니다.

> ##### PascalCase
> 
> 모든 단어를 대문자로 시작하며, 공백 없이 연결됩니다. <br/>
> 예) `StyleGuide`, `IsegyeIdolAvatar`, `ASeriesOfWords`.
>
> ##### camelCase
>
> 첫 단어는 소문자로 시작하며, 이후 단어의 첫 글자는 대문자로 시작합니다. <br/>
> 예) `styleGuide`, `isegyeIdolAvatar`, `aSeriesOfWords`
>
> ##### lowercase
>
> 모든 문자가 소문자로 구성됩니다. <br/>
> 예) `styleguide`
>
> ##### Snake_case
>
> 단어 사이를 밑줄 (_)로 구분하며, 대소문자는 혼용될 수 있습니다. <br/>
> 예) `style_Guide`, `IsegyeIdol_Avatar`, `a_Series_Of_Words`

