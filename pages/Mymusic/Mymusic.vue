<template>
	<view>
		<view class="page-body">
            <view class="page-section page-section-gap">
                <map style="width: 100%; height: 700px;" :latitude="latitude" :longitude="longitude" :markers="covers">
                </map>
            </view>
        </view>
	</view>
</template>

<script>
	export default {
    data() {
        return {
            title: 'map',
            latitude: 39.909,
            longitude: 116.39742,
            covers: [{
                latitude: 39.909,
                longitude: 116.39742,
                iconPath: '../../../static/location.png'
            }, {
                latitude: 39.90,
                longitude: 116.39,
                iconPath: '../../../static/location.png'
            }]
        }
    },
    methods: {

    }
}
</script>

<style>

</style>
