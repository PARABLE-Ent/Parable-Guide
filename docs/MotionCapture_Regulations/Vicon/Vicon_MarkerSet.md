---
sidebar_position: 2
---

# Marker 세팅

## Marker Template 선택
Marker를 부착하는 방식은 **Front Waist / Side Waist / Production**으로 3가지가 있습니다. <br/>
상황에 따라 적절한 템플릿을 사용해주세요.

- **Front Waist** : 표준 53개 Marker를 부착하는 세트입니다. <br/>
- **Side Waist** : 허리를 구부리는 동작이 많거나 앞뒤로 다른 액터가 서있는 경우가 많을 때 사용됩니다. <br/>
- **Production** : 마커의 Occlusion을 줄이기 위해 사용되는 템플릿입니다. 표준 마커 세트와 약간의 차이가 존재합니다.

:::tip Recommend
일반적으로 **Production** 템플릿을 권장합니다.
어느 환경에서나 좋은 품질의 데이터를 캡처할 수 있습니다.
:::

해당 세트에 손가락 마커를 추가할 수 있습니다. <br/>
**None Finger / 3 Finger / 5 Finger / 10 Finger** 중 하나를 선택할 수 있습니다.

- **None Finger** : 손가락 데이터가 필요하지 않을 때 사용합니다. <br/>
- **3 Finger** : 손가락의 움직임이 최소한으로 필요할 때 사용해주세요. 적절한 움직임을 캐치하기는 어렵습니다. <br/>
- **5 Finger** : 손가락의 적절한 움직임이 필요할 때 사용됩니다. <br/>
- **10 Finger** : 고품질의 손가락 데이터를 캡처하기 위해 사용됩니다. 세팅에 시간이 오래걸리니 잘 판단하여 사용해주세요. <br/>

손가락 마커를 제외한 전체 마커의 개수는 다음과 같습니다.
- Front / Side Waist : 53개
- Production : 57개



## Marker 배치

### Front Waist
Front Waist의 마커 배치 이미지입니다.





### Side Waist
Side Waist의 마커 배치 이미지입니다. <br/>
Front Waist에서 배치했던 허리 앞뒤 마커를 옆으로 배치합니다. 그 외에 다른 점은 없습니다.





### Production
Production의 마커 배치 이미지입니다. <br/>
관절 부위 마커 위치가 조금 다르며, 등과 어깨에 총 4개의 마커가 추가로 부착됩니다.





### Finger Marker
손가락은 기본 14mm 마커가 아닌 Soft Marker를 사용합니다. <br/>
스포츠 테이프를 적당한 길이로 잘라 가운데 구멍을 뚫고 마커를 넣어주세요. <br/>

손가락 마커는 Template에 따라 다르기 때문에 유의하여 부착해주세요. <br/>
- **3 Finger**
<img src={require('./img/3Finger.png').default} width="50%" alt="Vicon 3 Finger" /> <br/> <br/>

- **5 Finger**
<img src={require('./img/5Finger.png').default} width="50%" alt="Vicon 5 Finger" /> <br/> <br/>

- **10 Finger**
<img src={require('./img/10Finger.png').default} width="50%" alt="Vicon 10 Finger" /> <br/> <br/>

### 3D Reference
아래 3D 모델 데이터를 통해 마커 세트 샘플을 확인할 수 있습니다.
<div class="sketchfab-embed-wrapper">
    <iframe
        title="Vicon Suit Guide - Production Finger"
        frameborder="0"
        allowfullscreen mozallowfullscreen="true"
        webkitallowfullscreen="true"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share width="960" height="540"
        src="https://sketchfab.com/models/c1e4d7cb4fe24839a5a8b3e87ca411b1/embed">
    </iframe>
    <p style={{ fontsize: '13px', fontweight: 'normal', margin: '5px', color: '#4A4A4A' }} >
        <a
        href="https://sketchfab.com/3d-models/vicon-suit-guide-production-finger-c1e4d7cb4fe24839a5a8b3e87ca411b1?utm_medium=embed&utm_campaign=share-popup&utm_content=c1e4d7cb4fe24839a5a8b3e87ca411b1"
        target="_blank"
        rel="nofollow"
        style={{ fontweight: 'bold', color: '#1CAAD9' }} >    
        </a>
    </p>
</div>

## Cluster 세팅 (Option)
2인 이상의 모션캡처 액터가 있을 경우 Cluster를 사용합니다. <br/>
Cluster는 Shogun Live에서 액터 식별을 도와주는 용도로 사용됩니다. <br/>

Cluster에 5개의 마커를 연결합니다. 모든 Cluster는 서로 다른 패턴으로 부착해주세요. <br/>
< 5개의 마커를 연결한 Cluster 이미지 > <br/>

3D View에서 Cluster를 선택 후 Labeling Cluster에서 Create을 눌러 생성합니다. <br/>
<img src={require('./img/CreateCluster.png').default} width="50%" alt="Vicon System Photo" />
