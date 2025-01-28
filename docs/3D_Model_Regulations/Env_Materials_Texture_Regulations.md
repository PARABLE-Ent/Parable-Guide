---
sidebar: 2
---

# 머티리얼 및 텍스처 (배경)
**배경 머티리얼**과 **텍스처**에 관한 내용입니다. <br/>
엔진 내에 Material 및 Texture를 적용할 때 아래 내용을 숙지하시기 바랍니다.





## Material





### Shader
배경용 Shader는 **UPR Lit**을 기반으로 사용합니다. <br/>
**Level Asset**을 사용하는 경우 동봉된 Shader를 활용할 수 있지만, Forward+와 호환이 되는지 확인해주세요. <br/>


:::tip Shader 개발
배경 퀄리티를 높이기 위해서는 **Custom Shader**를 **개발**하여 사용하는 것이 좋습니다. <br/>
**기본적으로는 Lit으로 세팅**하되, 필요한 기능이 있을 경우 **TA/개발팀**에 문의 바랍니다.

****배경용 Custom Shader들은 내부 라이브러리에 상시 배포 예정입니다.***
:::





### Material Batching
최적화에 유의하여 **Batching**을 활용해 주시기 바랍니다. <br/>
**Batches, Draw Call**에 대해 제한을 두고 있지는 않지만, **비상식적**으로 높은 경우는 최적화를 해주세요.





### Material Variant
Unity의 **`Material Variant`** 사용을 권장하지 않습니다. <br/>
꼭 필요한 경우에만 사용해주시고, 그 외에는 사용을 자제해주시기 바랍니다.





## Texture
### sRGB
sRGB는 텍스처의 **Gamma를 보정**하는 옵션입니다. <br/>
상황에 따라 sRGB 옵션을 사용하시기 바랍니다.
<img src={require('../3D_Character_Regulations/img/Texture_sRGB.png').default} width="100%" alt="" />

- **sRGB 체크하는 경우**
    - Albeo, Emission Map과 같이 RGB 컬러를 혼합하여 사용하는 텍스처는 **sRGB**를 체크해주세요.
- **sRGB 체크 해제하는 경우**
    - AORM, Normal, Mask와 같이 RGB 채널의 **데이터**를 활용하는 경우는 **sRGB를 해제** 해주세요. <br/>
각 RGB 채널의 데이터를 활용하는 텍스처는 **Gamma 보정**이 이루어져서는 안됩니다.

### Normal Map
노말맵은 **엔진**에 따라 다르게 설정해주세요. <br/>
<img src={require('../3D_Character_Regulations/img/Normal_Example_1.jpeg').default} width="100%" alt="" />
- Unity : **OpenGL (Y+ Normal Maps)**
- Unreal Engine : **DirectX (Y- Normal Maps)**