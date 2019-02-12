
<aura:application extends="force:slds">
     <!--   <c:BMIForm  height="6" weight="70" />
-->
        <aura:attribute name="height" type="Decimal"  />
        <aura:attribute name="weight" type="Decimal" />

        <c:BMIForm  height="{!v.height}" weight= "{!v.weight}" />



</aura:application>	
