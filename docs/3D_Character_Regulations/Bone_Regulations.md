---
sidebar_position: 1
---

# 본 구조 및 네이밍
## Bone
캐릭터 본 구조와 네이밍은 **Unity Humanoid Bone** 구조를 기반으로 합니다. <br/>
<img src={require('./img/Humanoid_Bone.png').default} width="75%" alt="" />

### Spine
기본적으로 버추얼 아바타들의 대부분은 체형 특성상 **Spine -> Chest -> Neck**으로 진행됩니다. <br/>
Spine을 여러개 쓰고있지 않지만, 필요하다면 여러개 추가해도 무관합니다. <br/>

**대신 Upper Chest는 사용하지 말아주세요.**

### Finger Bone
손가락 본 네이밍은 **Proximal -> Intermediate -> Distal** 구조를 지켜주세요. <br/>
:::caution Mocap 본
Vicon 같은 **모션캡처 Rig**에서는 Finger 본이 다르게 설정되는 경우가 있습니다. <br/>
`ex) Index 본 안에 Middle 본이, Little 본 안에 Ring 본이 들어가는 경우가 있음.` <br/>
`근육 구조에 따라 검지, 소지를 움직이면 중지, 약지가 함께 움직이기 때문에 모션캡처 편의성을 위해 짜여진 구조.`

우리는 기본적으로 모션캡처를 활용하지만, Default. 세팅은 Hand 본에 5개의 Finger 본을 넣어주세요. <br/>
각 손가락은 Hand를 부모로 두어야 합니다.
:::

## Default Pose
캐릭터의 디폴트 포즈는 **T-Pose**를 유지해주세요. 현재 A-Pose, N-Pose는 사용하지 않습니다.
<img src={require('./img/T_Pose_Example.png').default} width="70%" alt="" />
<img src={require('./img/T_Pose_Example_2.png').default} width="70%" alt="" />

## Hair Bone
**Realtime-Simulation**의 원활한 움직임을 위해선 적당한 Bone 개수가 필요합니다. <br/>
너무 많아서도 안되고, 너무 적어서도 안됩니다. 기본적인 구조는 아래 내용을 따라주세요. <br/>

### 1. 네이밍
**Simulation**이 들어가는 Bone의 네이밍은 누가 봐도 이해할 수 있는 이름으로 작성해주세요. <br/>
이해하기 어렵고 복잡하거나 순서, 위치를 유추하기 어려운 짧은 이름은 지양해주세요. <br/>

- **Good**: FrontHair_L_01, FrontHair_R_03, etc.
- **Bad**: Hair01, Hair02, Hair03, Hair04, etc.

### 2. Front Hair
특별한 경우가 아닌 이상 최대 3개의 라인으로 분리하고, 라인당 최소 3개의 본을 사용해주세요. <br/>
**`ex. Hair_F_L -> Hair_F_L.001 -> Hair_F_L.002`**
<img src={require('./img/FrontHair_Example.png').default} width="60%" alt="" />

- 머리가 짧아 불가능할 경우 2개만 사용해도 괜찮습니다. <br/>
**`ex. Hair_F_L_01 -> Hair_F_L_02`**

- 헤어 구조상 3개 이상의 라인을 사용해야 할 경우 추가로 늘려도 괜찮습니다만,<br/>
**TA 혹은 솔루션 팀의 확인을 받아주세요.**

### 3. Back Hair
머리카락을 너무 분리시키지 말아주세요. 최대 6개 라인까지 사용해주세요. <br/>
**`ex. BackHair_L_1 / BackHair_L_2 / BackHair_L_3 / BackHair_R_1 / BackHair_R_2 / BackHair_R_3`**

### 4. Side Hair
옆머리는 좌/우 분리를 제외하고 **본을 나누지 말아주세요.** <br/>
한쪽 옆머리가 2개 이상의 라인으로 구성되면 안됩니다. 꼭 한 라인으로 작업해주세요. <br/>
<img src={require('./img/SideHair_Example.png').default} width="80%" alt="" />

## Cloth Bone
의상은 디자인 및 **Bone / Mesh Cloth Simulation** 선택에 따라 구조가 매우 달라집니다. <br/>
구조는 디자인에 따라 유기적으로 맞춰야하며, 아래 내용만을 지켜주시기 바랍니다. <br/>

### 1. Skirt Bone
- **짧은 치마**의 경우 **Leg에 Skirt 본을 연결**하여 사용합니다. 다리를 움직일 때 치마를 뚫지 않게 조정해주세요.
- **Bone Cloth Simulation**을 사용하는 경우 Leg에 연결하지 않고 독립적으로 배치해주세요.

### 2. Outer
- Strip, Belt와 같은 움직여야 할 요소가 있는 경우를 제외하고는 모두 **Mesh Cloth Simulation**을 사용합니다.
- 위와 같은 요소가 없는 경우 별도 Bone을 생성하지 말아주세요.

### 3. Accessory
- 넥타이, 귀걸이, 목걸이, 리본, 벨트 등 악세사리에 해당하는 본 입니다.
- **Bone / Mesh Cloth Simulation**에 따라 구조가 달라집니다. 상황에 따라 유기적으로 세팅해주세요.





## Animation
엔진에서는 Base FBX에 모션 파일을 적용시키는 구조를 활용합니다.
- Base FBX <br/>
  └ Body Animation <br/>
  └ Facial Animation <br/>
  └ etc.

위와 같은 구조를 이용하기에 Base FBX와 Animation 파일의 Bone 구조 및 네이밍이 서로 다르면 <br/>
애니메이션은 적용이 되지 않습니다. 항상 Base FBX를 기반으로 작업을 하시기 바랍니다.
<img src={require('./img/Bone_Mesh_Naming.png').default} width="80%" alt="" />

:::caution
바뀌었더라도 Convert를 할 수 있는 방법과 엔진 내 Utility 스크립트는 많이 존재합니다. <br/>
다만 워크플로우 내에 한가지 작업이 추가되는 것이므로 효율성을 위해 꼭 미리 확인을 바랍니다.
:::